// Gabarit des pages légales : contenu à rédiger par le propriétaire (aucun fait juridique inventé).
export default function LegalPage({ title }: { title: string }) {
  return (
    <main id="top" className="section" style={{ minHeight: "100svh" }}>
      <div className="wrap stack-4">
        <a className="link" href="/">Retour au site Salya</a>
        <h1 style={{ fontSize: "var(--t-h2)" }}>{title}</h1>
        <p className="t-lead"><span className="ph">[à rédiger]</span></p>
        <p>Cette page sera rédigée avant le lancement, avec les informations légales de l’éditeur.</p>
      </div>
    </main>
  );
}
