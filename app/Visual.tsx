// Visuels produit des sections : fragments du kit Taste (public/assets/ui) réécrits pour Liggeey.
// Toutes les données sont fictives (maquette) ; les noms de salariés sont ceux de la démo.

const CHECK = '<svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg>';
const check = (label: string, done: boolean) =>
  `<li class="ui-check${done ? " is-done" : ""}"><span class="ui-check__box">${CHECK}</span><span class="ui-check__label">${label}</span></li>`;

const FRAGMENTS = {
  checklist: `<div class="ui ui-panel ui-checks" data-ui="checklist">
  <div class="ui-checks__head"><div class="ui-title">Première paie</div><span class="ui-spacer"></span><div class="ui-meta" data-checks-count>2 sur 5</div></div>
  <div class="ui-checks__bar"><i data-checks-bar style="--k:0.4"></i></div>
  <ul class="ui-checks__list">
    ${check("Importer les six salariés", true)}${check("Vérifier le paramétrage", true)}${check("Calculer la paie de novembre", false)}${check("Approuver avec le rôle paie", false)}${check("Régler par lot", false)}
  </ul></div>`,

  window: `<div class="ui ui-panel ui-win" data-ui="window" data-open="En revue" data-work="En calcul" data-done="Approuvée">
  <div class="ui-win__bar"><span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="ui-win__crumb">Liggeey <i>/</i> <b>Paie de novembre</b></span><span class="ui-spacer"></span></div>
  <div class="ui-win__body">
    <nav class="ui-win__side" aria-hidden="true">
      <span class="ui-win__nav is-on">Paie<em>6</em></span><span class="ui-win__nav">Congés<em>2</em></span><span class="ui-win__nav">Présences</span><span class="ui-win__nav">Contrats</span>
      <span class="ui-win__label">Périodes</span><span class="ui-win__nav"><span class="ui-win__hash">#</span>Novembre</span><span class="ui-win__nav"><span class="ui-win__hash">#</span>Octobre</span>
    </nav>
    <div class="ui-win__main">
      <div class="ui-win__cols" aria-hidden="true"><span>Salarié</span><span>Poste</span><span>Statut</span><span>Période</span></div>
      <ul class="ui-win__rows">
        <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">AN</span><span class="ui-win__who">Awa Ndiaye</span><span class="ui-win__sub">Comptable · 389 500</span><span class="ui-win__st" data-st>En revue</span><span class="ui-win__age">nov.</span></li>
        <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">MS</span><span class="ui-win__who">Moussa Sow</span><span class="ui-win__sub">Chauffeur · 213 200</span><span class="ui-win__st" data-st>En revue</span><span class="ui-win__age">nov.</span></li>
        <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="4">FD</span><span class="ui-win__who">Fatou Diop</span><span class="ui-win__sub">Assistante RH · 311 600</span><span class="ui-win__st" data-st>En revue</span><span class="ui-win__age">nov.</span></li>
        <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="2">IF</span><span class="ui-win__who">Ibrahima Fall</span><span class="ui-win__sub">Technicien · 274 700</span><span class="ui-win__st is-you" data-st>À revoir</span><span class="ui-win__age">nov.</span></li>
        <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="5">MB</span><span class="ui-win__who">Mariama Ba</span><span class="ui-win__sub">Achats · 451 000</span><span class="ui-win__st is-done" data-st>Approuvée</span><span class="ui-win__age">oct.</span></li>
        <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">CG</span><span class="ui-win__who">Cheikh Gueye</span><span class="ui-win__sub">Magasinier · 192 700</span><span class="ui-win__st is-done" data-st>Approuvée</span><span class="ui-win__age">oct.</span></li>
      </ul>
    </div>
  </div></div>`,

  files: `<div class="ui ui-files" data-ui="files" data-reading="Lecture {n} sur {total}">
  <div class="ui-files__status"><span class="ui-dot"></span><span data-files-status>4 fichiers lus</span></div>
  <ul class="ui-files__grid">
    ${[
      ["Salariés.xlsx", "Excel", "glyph"],
      ["Contrats 2025", "Google Drive", "/assets/ui/icons/google-drive.svg"],
      ["Soldes de congés", "Google Docs", "/assets/ui/icons/google-docs.svg"],
      ["Bulletins octobre.pdf", "PDF", "glyph"],
    ]
      .map(
        ([n, k, ic]) => `<li class="ui-file is-done"><span class="ui-file__icon">${
          ic === "glyph"
            ? '<svg class="ui-file__glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.25 2.75h8L18.75 7.25v14H6.25z"/><path d="M14 2.75v4.75h4.75M9 12.5h6.5M9 15.5h6.5M9 18.5h4"/></svg>'
            : `<img src="${ic}" alt="">`
        }</span><span class="ui-file__name">${n}</span><span class="ui-file__kind">${k}</span><span class="ui-file__bar"><i></i></span><span class="ui-file__check"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.2 2.3 2.3 4.7-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></li>`,
      )
      .join("")}
  </ul></div>`,

  notify: `<div class="ui ui-notify" data-ui="notify"><ul class="ui-notify__list" data-notify-list>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="1">LG</span><span class="ui-note__text"><span class="ui-note__title">Liggeey · paie approuvée<time>maintenant</time></span><span class="ui-note__body">Novembre 2026, six bulletins archivés</span></span><span class="ui-btn ui-btn--sm ui-note__btn">Ouvrir</span></li>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="4">CP</span><span class="ui-note__text"><span class="ui-note__title">Passerelles comptables<time>bientôt</time></span><span class="ui-note__body">Vous serez prévenu dès l’ouverture</span></span></li>
    <li class="ui-note"><span class="ui-note__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg></span><span class="ui-note__text"><span class="ui-note__title">Autres modules<time>vos avis</time></span><span class="ui-note__body">Dites-nous ce qui vous manque le plus</span></span></li>
  </ul></div>`,

  approvals: `<div class="ui ui-notify" data-ui="notify"><ul class="ui-notify__list" data-notify-list>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="4">FD</span><span class="ui-note__text"><span class="ui-note__title">Fatou Diop a préparé la paie<time>9:12</time></span><span class="ui-note__body">Novembre 2026, six salariés</span></span></li>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="1">AN</span><span class="ui-note__text"><span class="ui-note__title">Rôle paie : à approuver<time>9:30</time></span><span class="ui-note__body">Autre que le préparateur</span></span><span class="ui-btn ui-btn--sm ui-note__btn">Approuver</span></li>
    <li class="ui-note"><span class="ui-note__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg></span><span class="ui-note__text"><span class="ui-note__title">Période clôturée<time>10:05</time></span><span class="ui-note__body">Elle ne se modifie plus</span></span></li>
  </ul></div>`,

  invoice: `<div class="ui ui-notify" data-ui="notify"><ul class="ui-notify__list" data-notify-list>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="1">LG</span><span class="ui-note__text"><span class="ui-note__title">Facture de novembre<time>6 salariés</time></span><span class="ui-note__body">1 200 FCFA par salarié, minimum 12 000</span></span></li>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="4">PD</span><span class="ui-note__text"><span class="ui-note__title">Pack Démarrage<time>une fois</time></span><span class="ui-note__body">Reprise, paramétrage et formation : [Z] FCFA</span></span></li>
    <li class="ui-note"><span class="ui-note__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg></span><span class="ui-note__text"><span class="ui-note__title">Un mois d’essai offert<time>jour 1</time></span><span class="ui-note__body">Aucun paiement avant la fin de l’essai</span></span></li>
  </ul></div>`,

  chat: `<div class="ui ui-panel ui-chat" data-ui="chat">
  <div class="ui-head"><span class="ui-agent" aria-hidden="true"></span><div class="ui-title">Équipe Salya</div><span class="ui-chat__online">En ligne</span><span class="ui-spacer"></span></div>
  <div class="ui-chat__body">
    <div class="ui-chat__day">Aujourd’hui, 9:41</div>
    <div class="ui-msg ui-msg--me" data-chat-q><span class="ui-msg__text">Nous sommes 18 salariés. Pouvez-vous reprendre notre fichier Excel ?</span></div>
    <div class="ui-msg ui-msg--bot" data-chat-a><span class="ui-agent ui-msg__av" aria-hidden="true"></span><span class="ui-msg__col"><span class="ui-chat__answer">Oui. Envoyez-le ici, nous importons les <b>18 salariés</b> avec vous.</span></span></div>
  </div>
  <div class="ui-chat__input"><span class="ui-chat__ph">Écrivez un message</span><span class="ui-chat__send" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
</div>`,
} as const;

export type FragmentName = keyof typeof FRAGMENTS;

export default function Visual({
  name,
  max,
  h = 460,
  className = "span-6 start-7",
  label,
}: {
  name: FragmentName;
  max: number;
  h?: number;
  className?: string;
  label: string;
}) {
  return (
    <div className={`panel ${className}`} role="img" aria-label={label} style={{ ["--p-h" as string]: `${h}px` }}>
      <div className="stage stage--fade-b">
        <div
          className="at-rise fit"
          style={{ ["--fit-max" as string]: `${max}px`, ["--ax" as string]: `max(24px, 50% - ${max / 2}px)`, ["--ay" as string]: "40px", ["--ay-sm" as string]: "16px" }}
          dangerouslySetInnerHTML={{ __html: FRAGMENTS[name] }}
        />
      </div>
    </div>
  );
}
