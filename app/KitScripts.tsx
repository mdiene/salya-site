"use client";

import { useEffect } from "react";

// Les scripts du kit Taste modifient le DOM : ils se chargent après l'hydratation de React
// et le chargement de la page, pour éviter l'erreur #418 et ne pas bloquer le fil principal.
const SCRIPTS = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

export default function KitScripts() {
  useEffect(() => {
    const load = () => {
      for (const src of SCRIPTS) {
        const s = document.createElement("script");
        s.type = "module";
        s.src = src;
        document.body.appendChild(s);
      }
    };
    const idle = () => ("requestIdleCallback" in window ? window.requestIdleCallback(load, { timeout: 300 }) : setTimeout(load, 200));
    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });
  }, []);
  return null;
}
