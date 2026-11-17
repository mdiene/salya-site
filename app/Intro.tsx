"use client";

import { useEffect } from "react";

// Animation d'ouverture : le symbole Salya éclate, ses fragments se rassemblent en spirale, puis il s'envole se poser à sa place dans l'en-tête.
// Joué une fois par session, seulement sur l'accueil, jamais si l'utilisateur réduit les animations (la classe html.intro-on est posée par un script du <head>).
// Canvas 2D sans dépendance : un millier de particules échantillonnées sur le vrai logo, puis le logo net prend le relais pour l'atterrissage.

const NAVY = [22, 26, 58]; // fond de l'ouverture (--p-inv-bg)
const BURST = 650; // ms : éclatement depuis le centre
const GATHER = 1750; // ms : rassemblement
const SETTLE = 900; // ms : vol vers l'en-tête
const HOLD = 220; // ms : pause logo net avant le vol

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

type P = { tx: number; ty: number; bx: number; by: number; sx: number; sy: number; c: string; s: number; d: number; sw: number };

export default function Intro() {
  useEffect(() => {
    const root = document.documentElement;
    const host = document.getElementById("intro");
    if (!root.classList.contains("intro-on") || !host) return;

    host.querySelectorAll("canvas").forEach((c) => c.remove()); // React rejoue l'effet en développement
    const canvas = document.createElement("canvas");
    host.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) { root.classList.remove("intro-on"); return; }

    let raf = 0;
    let done = false;
    let started = 0;
    let particles: P[] = [];
    let img: HTMLImageElement | null = null;
    let W = 0, H = 0, S = 0, cx = 0, cy = 0, dpr = 1;
    let target = { x: 0, y: 0, size: 0 };

    const finish = () => {
      if (done) return;
      done = true;
      cancelAnimationFrame(raf);
      try { sessionStorage.setItem("salya-intro", "1"); } catch {}
      root.classList.add("intro-end");
      window.setTimeout(() => {
        root.classList.remove("intro-on", "intro-end");
        canvas.remove();
      }, 650);
    };

    const measure = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      S = Math.min(W, H) * (W < 640 ? 0.46 : 0.34);
      cx = W / 2; cy = H / 2;
      // le symbole occupe le carré 8..112 d'un viewBox de 120 de haut : on vise ce carré dans le logo de l'en-tête
      const logo = document.querySelector<HTMLImageElement>(".nav__logo img");
      const r = logo?.getBoundingClientRect();
      if (r && r.height > 0) {
        const k = r.height / 120;
        target = { x: r.left + 60 * k, y: r.top + 60 * k, size: 104 * k };
      } else {
        target = { x: 56, y: 36, size: 40 };
      }
    };

    const sample = (image: HTMLImageElement) => {
      const px = 300; // résolution d'échantillonnage
      const off = document.createElement("canvas");
      off.width = off.height = px;
      const o = off.getContext("2d", { willReadFrequently: true });
      if (!o) return [] as P[];
      o.drawImage(image, 0, 0, px, px);
      const data = o.getImageData(0, 0, px, px).data;
      const step = Math.max(3, Math.round(px / 62));
      const out: P[] = [];
      const diag = Math.hypot(W, H);
      const k = S / px;
      for (let y = 0; y < px; y += step) {
        for (let x = 0; x < px; x += step) {
          const i = (y * px + x) * 4;
          if (data[i + 3] < 140) continue;
          const tx = cx + (x + step / 2 - px / 2) * k;
          const ty = cy + (y + step / 2 - px / 2) * k;
          const a = Math.random() * Math.PI * 2;
          const dist = (0.18 + Math.random() * 0.62) * diag * 0.5;
          out.push({
            tx, ty,
            bx: cx + Math.cos(a) * dist, by: cy + Math.sin(a) * dist, // fin de l'éclatement
            sx: tx, sy: ty,
            c: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
            s: step * k * (0.78 + Math.random() * 0.5),
            d: Math.random() * 0.32 + Math.hypot(tx - cx, ty - cy) / S * 0.18, // retard (fraction du rassemblement)
            sw: (Math.random() - 0.5) * 2.6, // torsion de la spirale
          });
        }
      }
      return out;
    };

    const frame = (now: number) => {
      if (done) return;
      if (!started) started = now;
      const t = now - started;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      host.style.backgroundImage = "none"; // le logo statique du CSS laisse la place aux particules

      const tFly = BURST + GATHER + HOLD;
      const fly = clamp((t - tFly) / SETTLE);
      const fe = easeInOutCubic(fly);
      // le fond marine s'efface pendant le vol : la page apparaît sous le logo
      host.style.backgroundColor = `rgba(${NAVY[0]},${NAVY[1]},${NAVY[2]},${1 - clamp((fly - 0.05) / 0.85)})`;

      if (t < BURST + GATHER + 160) {
        // une onde dorée accompagne l'éclatement
        const w = clamp(t / 900);
        if (w < 1) {
          ctx.beginPath();
          ctx.arc(cx, cy, easeOutCubic(w) * Math.max(W, H) * 0.55, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245,184,61,${0.35 * (1 - w)})`;
          ctx.lineWidth = 2 + 10 * (1 - w);
          ctx.stroke();
        }
        const crisp = clamp((t - (BURST + GATHER - 120)) / 280); // fondu vers le logo net
        for (const p of particles) {
          let x: number, y: number, alpha: number;
          if (t < BURST) {
            const e = easeOutCubic(t / BURST);
            x = p.sx + (p.bx - p.sx) * e; y = p.sy + (p.by - p.sy) * e;
            alpha = 1;
          } else {
            const lt = clamp((t - BURST - p.d * GATHER * 0.55) / (GATHER * (1 - 0.55 * 0.5)));
            const e = easeOutQuint(lt);
            // retour en spirale : le décalage restant tourne autour de la cible puis se résorbe
            const dx = p.bx - p.tx, dy = p.by - p.ty;
            const ang = (1 - e) * p.sw;
            const cs = Math.cos(ang), sn = Math.sin(ang);
            x = p.tx + (dx * cs - dy * sn) * (1 - e);
            y = p.ty + (dx * sn + dy * cs) * (1 - e);
            alpha = 1;
          }
          ctx.globalAlpha = alpha * (1 - crisp);
          ctx.fillStyle = p.c;
          ctx.fillRect(x - p.s / 2, y - p.s / 2, p.s, p.s);
        }
        ctx.globalAlpha = 1;
        if (img && crisp > 0) {
          ctx.globalAlpha = crisp;
          ctx.drawImage(img, cx - S / 2, cy - S / 2, S, S);
          ctx.globalAlpha = 1;
        }
      } else if (img) {
        // logo net : pause, puis vol vers sa place dans l'en-tête
        const size0 = S, size1 = target.size;
        const size = size0 + (size1 - size0) * fe;
        const x = cx + (target.x - cx) * fe, y = cy + (target.y - cy) * fe;
        // petit rebond d'atterrissage
        const settle = fly > 0.82 ? 1 + Math.sin((fly - 0.82) / 0.18 * Math.PI) * 0.045 : 1;
        const sz = size * settle;
        ctx.drawImage(img, x - sz / 2, y - sz / 2, sz, sz);
      }

      if (t >= tFly + SETTLE) { finish(); return; }
      raf = requestAnimationFrame(frame);
    };

    const onSkip = () => finish();
    window.addEventListener("keydown", onSkip, { once: true });
    host.addEventListener("pointerdown", onSkip, { once: true });
    const guard = window.setTimeout(finish, 7000);

    const image = new Image();
    image.onload = () => {
      img = image;
      measure();
      particles = sample(image);
      if (!particles.length) { finish(); return; }
      raf = requestAnimationFrame(frame);
    };
    image.onerror = finish;
    image.src = "/logos/salya_symbole.svg";

    return () => {
      window.clearTimeout(guard);
      window.removeEventListener("keydown", onSkip);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div id="intro" className="intro" aria-hidden="true" />;
}
