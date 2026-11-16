import Link from "next/link";
import type { ReactNode } from "react";

// Gabarit des pages légales. Les repères pointillés sont des faits que seul l'éditeur connaît : ils ne sont jamais inventés.
export function Ph({ children }: { children: ReactNode }) {
  return <span className="ph">[{children}]</span>;
}

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="top" className="section" style={{ minHeight: "100svh" }}>
      <div className="wrap stack-4" style={{ maxWidth: 760 }}>
        <Link className="link" href="/">Retour au site Salya</Link>
        <h1 style={{ fontSize: "var(--t-h2)" }}>{title}</h1>
        <p className="t-small muted">Dernière mise à jour : 16 novembre 2026. Projet de texte à faire relire par un juriste avant la mise en ligne.</p>
        {children}
      </div>
    </main>
  );
}
