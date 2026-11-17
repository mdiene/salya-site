"use client";

import { useState } from "react";

// Sans accord pour Supabase, rien n'est envoyé : le formulaire prépare un message copiable (comportement de la maquette v1).
const SIZES = ["1 à 20", "21 à 100", "101 à 500", "Plus de 500", "Cabinet, plusieurs clients"];

export default function TrialForm() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState("");
  const [errors, setErrors] = useState<{ name?: string; wa?: string }>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const wa = String(f.get("wa") || "").trim();
    const errs: { name?: string; wa?: string } = {};
    if (!name) errs.name = "Écrivez votre nom, comme il apparaît sur vos documents.";
    if (!wa) errs.wa = "Écrivez un numéro WhatsApp, par exemple +221 77 000 00 00.";
    setErrors(errs);
    if (errs.name || errs.wa) {
      (e.currentTarget.elements.namedItem(errs.name ? "name" : "wa") as HTMLElement | null)?.focus();
      return;
    }
    const co = String(f.get("company") || "").trim() || "[entreprise]";
    setCopied("");
    setText(
      `Bonjour, je souhaite accéder à la version de test de Salya RH.\nNom : ${name}\nEntreprise : ${co}\nSalariés : ${f.get("size")}\nWhatsApp : ${wa}`,
    );
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied("Copié");
    } catch {
      setCopied("Copie refusée, sélectionnez le texte");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="fName">Votre nom</label>
        <input id="fName" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby="fName-err" />
        <p className="field__error" id="fName-err" hidden={!errors.name}>{errors.name}</p>
      </div>
      <div className="field">
        <label htmlFor="fCo">Entreprise ou cabinet</label>
        <input id="fCo" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="fSize">Nombre de salariés</label>
        <select id="fSize" name="size">
          {SIZES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="fWa">Numéro WhatsApp</label>
        <input id="fWa" name="wa" type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={!!errors.wa} aria-describedby="fWa-err" />
        <p className="field__error" id="fWa-err" hidden={!errors.wa}>{errors.wa}</p>
      </div>
      <div className="btn-row">
        <button className="btn btn--primary" type="submit">Préparer ma demande d’essai</button>
      </div>
      <div className={`sent${text ? " show" : ""}`} role="status" aria-live="polite">
        {text && (
          <>
            <b>Rien n’est envoyé pour l’instant : copiez ce message et envoyez-le nous par WhatsApp.</b>
            <pre>{text}</pre>
            <div className="btn-row">
              <button className="btn btn--secondary" type="button" onClick={copy}>Copier le message</button>
              <span>{copied}</span>
            </div>
          </>
        )}
      </div>
    </form>
  );
}
