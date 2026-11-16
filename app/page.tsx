import Demo from "./Demo";
import TrialForm from "./TrialForm";
import Visual from "./Visual";

const ARROW = (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

const PILLARS = [
  ["En français", "Écrans, bulletins et aide rédigés pour les équipes RH francophones."],
  ["Tout en FCFA", "Montants, arrondis et exports pensés pour la zone UEMOA."],
  ["Pensé mobile", "Des pages légères qui restent fluides quand la connexion varie."],
  ["Reprise assistée", "Nous importons votre existant avec vous pendant le mois d’essai."],
];

const MODULES = [
  ["Paie et bulletins", "Heures supplémentaires, primes, retenues, prêts plafonnés, prorata."],
  ["Congés et absences", "Soldes par salarié, demandes, impact automatique sur la paie du mois."],
  ["Présences", "Saisie des présences et variables du mois, avec contrôle avant calcul."],
  ["Contrats et dossiers", "Fiche salarié, déclaration d’embauche, documents en espace privé."],
  ["Rôles et validations", "Administrateur, RH, paie, manager, salarié : chacun son périmètre."],
  ["Piste d’audit", "Chaque changement est journalisé. Une période clôturée ne se modifie plus."],
];

const STATUTS = ["Brouillon", "Calculée", "En revue", "Approuvée", "Validée", "Payée", "Clôturée"];

const TRIAL = [
  ["Jour 1", "Votre espace est ouvert. Vous importez un premier fichier avec nous."],
  ["Semaine 1", "Reprise de vos salariés, contrats et soldes depuis Excel ou votre ancien logiciel."],
  ["Semaines 2 et 3", "Première paie en parallèle de la vôtre, écarts expliqués ligne par ligne."],
  ["Jour 30", "Vous décidez. Vous gardez vos données, que vous continuiez ou non."],
];

const CMP = [
  ["Mise en route", "Souvent un projet de plusieurs semaines, avec un consultant.", "Objectif : première paie dans la journée, sans consultant."],
  ["Reprise de l’existant", "À votre charge, ou en prestation payante.", "Accompagnée pendant le mois d’essai."],
  ["Coût de départ", "Licence et déploiement à l’avance.", "Abonnement mensuel à partir de 1 200 FCFA par salarié, un mois offert."],
  ["Mises à jour légales", "Selon le contrat de maintenance.", "Taux et plafonds tenus à jour, compris dans l’abonnement."],
  ["Langue et monnaie", "Selon l’éditeur et le pays.", "Français et FCFA dès l’origine."],
  ["Règlement des salaires", "Souvent traité hors du logiciel.", "Règlement par lot préparé dans l’outil (en cours de finalisation)."],
  ["Contrôles", "Variables selon les modules achetés.", "Validation par rôles, piste d’audit, périodes verrouillées."],
];

const FAQ = [
  ["Combien de temps pour faire ma première paie ?", "Notre objectif est une première paie dans la journée pour une petite équipe, avec vos fichiers existants. Pour une structure plus grande, nous planifions la reprise avec vous pendant le mois d’essai."],
  ["Puis-je reprendre mes salariés depuis Excel ?", "Oui. Vous déposez votre fichier, Liggeey signale les informations manquantes et vous les corrigez à l’écran. Notre équipe vous accompagne."],
  ["Les règles de paie du Sénégal sont-elles à jour ?", "Les paramètres sont tenus à jour par notre équipe à partir des textes en vigueur. La liste détaillée et sa date de dernière mise à jour seront publiées ici avant le lancement. [à valider]"],
  ["Que deviennent mes données si j’arrête après l’essai ?", "Elles restent les vôtres. Vous pourrez les récupérer, que vous continuiez ou non. [engagement à valider]"],
  ["Comment le prix est-il calculé ?", "Au nombre de salariés payés dans le mois, avec un minimum mensuel selon la formule et des remises de volume. Aucun frais caché : la reprise de vos données est un forfait facultatif."],
  ["Que signifie « tarif pilote » ?", "Les premiers clients bénéficient d’un prix réduit pendant que nous terminons les déclarations officielles, le règlement par mobile money et la double authentification. En échange, nous vous demandons votre retour d’expérience."],
  ["Pourquoi un abonnement plutôt qu’un module acheté une fois ?", "L’abonnement comprend les mises à jour des textes, l’hébergement, le support et l’espace salarié. Un module acheté une fois ne suit pas les changements de la loi."],
  ["Et pour plusieurs entreprises ou plusieurs clients ?", "L’offre Cabinets (en préparation) et l’offre Grandes entreprises sont prévues pour cela. Parlez-nous de votre organisation et nous préparons un essai adapté."],
];

function Ph({ children }: { children: React.ReactNode }) {
  return <span className="ph">{children}</span>;
}

export default function Home() {
  return (
    <>
      {/* type: software · deal: hero collage, nav nav-centre, footer footer-statement, close close-word, rhythm space, buttons arrow, mark initial · moments: word-highlight (#cadre) */}
      <header className="nav nav--centre">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Aller au contenu</a>
          <a className="nav__logo" href="#top" aria-label="Salya, accueil"><img src="/logos/salya_logo_principal.svg" alt="Salya" height="32" style={{ height: 32, width: "auto" }} /></a>
          <nav className="nav__links" aria-label="Navigation principale">
            <div className="nav__item"><a className="nav__link" href="#liggeey">Liggeey</a></div>
            <div className="nav__item"><a className="nav__link" href="#essai">Essai</a></div>
            <div className="nav__item"><a className="nav__link" href="#tarifs">Tarifs</a></div>
            <div className="nav__item"><a className="nav__link" href="#comparatif">Comparatif</a></div>
            <div className="nav__item"><a className="nav__link" href="#faq">Questions</a></div>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href="#demo">Essayer la démo guidée{ARROW}</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--collage" data-enter aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <h1 id="hero-h">Logiciel de paie et RH : première paie en 1 jour</h1>
                <p className="hero__lead">
                  Liggeey, le module RH et paie de Salya, prépare vos bulletins en une journée, sans installation ni consultant. Un mois d’essai offert, avec reprise de vos fichiers existants.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#demo">Essayer la démo guidée{ARROW}</a>
                  <a className="btn btn--secondary" href="#inscription">Réserver un mois d’essai</a>
                </div>
                <p className="hero__proof">Première paie dans la journée pour une petite équipe.</p>
              </div>
              <div className="hero__art span-6 start-7" role="img" aria-label="Liggeey : la paie de novembre 2026 pour six salariés fictifs, et le bulletin d’Awa Ndiaye approuvé">
                <div className="ly-piece ly-piece--main d-win" aria-hidden="true">
                  <div className="d-win__bar"><span className="d-win__dots"><i></i><i></i><i></i></span><span>Liggeey · Société exemple (données fictives)</span></div>
                  <div className="d-win__body">
                    <div className="d-side">
                      <span><i></i>Accueil</span><span><i></i>Salariés</span><span className="is-on"><i></i>Paie</span><span><i></i>Congés</span><span><i></i>Présences</span>
                      <span className="d-side__label">Périodes</span><span><i></i>Novembre 2026</span><span><i></i>Octobre 2026</span>
                    </div>
                    <div className="d-main">
                      <div className="d-main__head"><h4>Paie de novembre</h4><span className="d-btn">Approuver</span></div>
                      <div className="d-tabs"><span className="is-on">Tous 6</span><span>À revoir 1</span><span>Approuvés 5</span></div>
                      <div className="d-rows">
                        {[
                          ["Awa Ndiaye", "Comptable", "389 500", "Approuvée", ""],
                          ["Moussa Sow", "Chauffeur", "213 200", "Approuvée", ""],
                          ["Fatou Diop", "Assistante RH", "311 600", "Approuvée", ""],
                          ["Ibrahima Fall", "Technicien", "274 700", "Approuvée", ""],
                          ["Mariama Ba", "Responsable achats", "451 000", "En revue", " d-chip--low"],
                          ["Cheikh Gueye", "Magasinier", "192 700", "Approuvée", ""],
                        ].map(([n, p, net, st, cl]) => (
                          <div className="d-row" key={n}>
                            <span className="d-thumb" style={{ background: "#e9e4d6" }}></span>
                            <div><b>{n}</b><small>{p}</small></div>
                            <span className="num">{net}</span>
                            <span className={`d-chip${cl}`}>{st}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ly-piece ly-piece--note d-card" aria-hidden="true" data-ly-steps="700">
                  <div className="d-card__row"><h5>Bulletin d’Awa Ndiaye</h5><span className="d-chip" data-step data-step-at="4">Approuvé</span></div>
                  <div className="d-note__line" data-step><i>✓</i><span>Base <b>450 000</b>, primes <b>25 000</b></span></div>
                  <div className="d-note__line" data-step><i>✓</i><span>Retenues <b>85 500</b> (taux fictif)</span></div>
                  <div className="d-note__line" data-step><i>✓</i><span>Net à payer <b>389 500 FCFA</b></span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="pourquoi" style={{ ["--hm" as string]: 2 }} aria-labelledby="pourquoi-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <h2 id="pourquoi-h">Paie et RH en français, <span className="muted">en FCFA, pour la zone UEMOA.</span></h2>
                <ul className="rows">
                  {PILLARS.map(([t, d]) => (
                    <li key={t}><span className="rows__name">{t}</span><p>{d}</p></li>
                  ))}
                </ul>
              </div>
              <Visual name="checklist" max={340} h={560} label="Liste de contrôle de la première paie : deux étapes faites sur cinq" />
            </div>
          </div>
        </section>

        <section className="section" id="demo" style={{ ["--hm" as string]: 2 }} aria-labelledby="demo-h">
          <div className="wrap">
            <Demo />
          </div>
        </section>

        <section className="section" id="liggeey" style={{ ["--hm" as string]: 2 }} aria-labelledby="liggeey-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <h2 id="liggeey-h">Six modules pour le cycle RH et paie du mois.</h2>
                <p className="t-small muted">« Liggeey » veut dire travail en wolof.</p>
                <ul className="rows">
                  {MODULES.map(([t, d]) => (
                    <li key={t}><span className="rows__name">{t}</span><p>{d}</p></li>
                  ))}
                </ul>
              </div>
              <Visual name="window" max={456} h={560} label="Fenêtre Liggeey : la paie de novembre, six salariés et leur statut" />
            </div>
          </div>
        </section>

        <section className="section statement" id="cadre" data-moment="word-highlight" aria-label="Une paie tracée">
          <div className="wrap">
            <p className="t-label">Une paie tracée</p>
            <p className="mo-wh__text">Une paie juste se calcule, se relit, <strong>s’approuve</strong> puis se règle, chaque étape tracée, et la personne qui prépare n’est jamais celle qui approuve.</p>
            <div className="flow" role="list" aria-label="Les sept statuts d’une paie" style={{ marginTop: "var(--s-8)" }}>
              {STATUTS.map((s, i) => <div key={s} role="listitem" className={i === 3 ? "on" : ""}>{s}</div>)}
            </div>
          </div>
        </section>

        <section className="section" id="essai" style={{ ["--hm" as string]: 2 }} aria-labelledby="essai-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <h2 id="essai-h">On reprend votre existant avec vous. <span className="muted">Pendant trente jours, notre équipe vous aide à migrer et à vérifier vos premiers bulletins.</span></h2>
                <ul className="rows">
                  {TRIAL.map(([t, d]) => (
                    <li key={t}><span className="rows__name">{t}</span><p>{d}</p></li>
                  ))}
                </ul>
                <div className="btn-row"><a className="btn btn--primary" href="#inscription">Réserver un mois d’essai{ARROW}</a></div>
              </div>
              <Visual name="files" max={420} h={560} label="Fichiers repris pendant l’essai : Excel, Google Drive, Google Docs et PDF" />
            </div>
          </div>
        </section>

        <section className="section" id="suite" aria-labelledby="suite-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <h2 id="suite-h">Liggeey aujourd’hui, <span className="muted">la suite Salya demain.</span></h2>
                <ul className="rows">
                  <li><span className="rows__name">Liggeey <span className="tag ok">Disponible</span></span><p>RH et paie. C’est ici que tout commence.</p></li>
                  <li><span className="rows__name">Déclarations officielles <span className="tag">En cours</span></span><p>Exports pour l’IPRES, la CSS et les impôts, avec un contrôle avant dépôt.</p></li>
                  <li><span className="rows__name">Règlement par lot et mobile money <span className="tag">Bientôt</span></span><p>Fichiers de virement, Wave et Orange Money.</p></li>
                  <li><span className="rows__name">Passerelles comptables <span className="tag">Bientôt</span></span><p>Échanges avec Sage, Odoo, SunuCompta et Excel, sans ressaisie.</p></li>
                  <li><span className="rows__name">Autres modules <span className="tag">Bientôt</span></span><p>Dites-nous ce qui vous manque le plus, nous construisons dans cet ordre.</p></li>
                </ul>
                <a className="link" href="#inscription">Être prévenu des prochains modules</a>
              </div>
              <Visual name="notify" max={380} h={520} label="Notifications Salya : paie approuvée, déclarations officielles, passerelles comptables" />
            </div>
          </div>
        </section>

        <section className="section" id="comparatif" aria-labelledby="cmp-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="cmp-h">Face aux logiciels propriétaires classiques. <span className="muted">Comparatif indicatif, à préciser avant publication.</span></h2>
            </div>
            <div className="grid cmp-grid">
              <div className="cmp-wrap span-8">
              <table className="cmp">
                <thead>
                  <tr><th scope="col">Critère</th><th scope="col">Logiciels propriétaires classiques</th><th scope="col" className="us">Liggeey</th></tr>
                </thead>
                <tbody>
                  {CMP.map(([c, a, b]) => (
                    <tr key={c}><th scope="row">{c}</th><td data-label="Logiciels classiques">{a}</td><td className="us" data-label="Liggeey">{b}</td></tr>
                  ))}
                </tbody>
              </table>
              </div>
              <Visual name="approvals" max={340} h={420} className="span-4 cmp-visual" label="Validations par rôles : la paie préparée par une personne est approuvée par une autre" />
            </div>
          </div>
        </section>

        <section className="section" id="tarifs" style={{ ["--hm" as string]: 2 }} aria-labelledby="tarifs-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <h2 id="tarifs-h">Un prix lisible, un mois offert. <span className="muted">Par salarié et par mois, en FCFA hors taxes. Tarifs pilote.</span></h2>
                <ul className="rows">
                  <li><span className="rows__name">Essentiel</span><p>6 à 50 salariés. Paie et bulletins, congés et absences, fiche salarié et documents, support par WhatsApp. Minimum 12 000 FCFA par mois.</p><span className="rows__value">1 200 FCFA</span></li>
                  <li><span className="rows__name">Pro <span className="tag ok">Le plus choisi</span></span><p>20 à 300 salariés. Tout Essentiel, plus présences et variables du mois, rôles, validations, piste d’audit, prêts, heures supplémentaires et prorata. Minimum 30 000 FCFA par mois.</p><span className="rows__value">1 500 FCFA</span></li>
                  <li><span className="rows__name">Verticale <span className="tag">Pilote</span></span><p>Intérim, gardiennage, hôtellerie et restauration, transport, nettoyage. Tout Pro, plus les règles de votre métier.</p><span className="rows__value">2 500 FCFA</span></li>
                  <li><span className="rows__name">Cabinets <span className="tag">Bientôt</span></span><p>Fiduciaires et sociétés de paie externalisée : plusieurs dossiers, droits par collaborateur. 35 000 FCFA par mois pour 10 dossiers, puis 3 000 par dossier.</p><span className="rows__value">Liste d’attente</span></li>
                  <li><span className="rows__name">Grandes entreprises</span><p>Plus de 300 salariés, conventions spécifiques, accompagnement dédié et formation de vos équipes.</p><span className="rows__value">Sur devis</span></li>
                  <li><span className="rows__name">Pack Démarrage</span><p>Reprise de l’existant, paramétrage et formation, en forfait unique et facultatif.</p><span className="rows__value"><Ph>[Z] FCFA</Ph></span></li>
                </ul>
                <p className="t-small muted">Remises de volume : 10 % de 11 à 30 salariés, 20 % de 31 à 75, 30 % au-delà. Les mises à jour des taux et plafonds légaux sont comprises.</p>
                <div className="btn-row"><a className="btn btn--primary" href="#inscription">Démarrer l’essai{ARROW}</a></div>
              </div>
              <Visual name="invoice" max={380} h={460} label="Aperçu d’une facture Liggeey : six salariés, 1 200 FCFA par salarié, minimum mensuel de 12 000 FCFA" />
            </div>
          </div>
        </section>

        <section className="section" id="faq" style={{ ["--hm" as string]: 2 }} aria-labelledby="faq-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <h2 id="faq-h">Questions fréquentes</h2>
                <p className="t-lead muted">Avant de vous lancer.</p>
                <a className="link" href="#inscription">Poser une autre question</a>
              </div>
              <div className="faq span-6 start-7">
                {FAQ.map(([q, a]) => (
                  <div className="faq__item" key={q}>
                    <h3>{q}</h3>
                    <p>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="inscription" style={{ ["--hm" as string]: 2 }} aria-labelledby="inscription-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <h2 id="inscription-h">Réservez votre mois d’essai.</h2>
                <p className="t-lead">Dites-nous qui vous êtes et combien de salariés vous gérez. Nous vous écrivons pour ouvrir votre espace.</p>
                <p>WhatsApp : <Ph>+221 [numéro]</Ph><br />Dakar, Sénégal</p>
                <div className="grid"><Visual name="chat" max={340} h={380} className="span-12" label="Échange avec l’équipe Salya : reprise d’un fichier Excel de 18 salariés" /></div>
              </div>
              <div className="span-6 start-7">
                <TrialForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--word">
            <div className="section-head--split">
              <div>
                <h2 id="close-h">Prêt à essayer ?</h2>
                <p className="t-lead">Un mois offert, avec reprise de vos fichiers.</p>
              </div>
              <a className="btn btn--primary" href="#demo">Essayer la démo guidée{ARROW}</a>
            </div>
            <p className="close__word" aria-hidden="true">Salya</p>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-6 stack-4">
                <a className="nav__logo" href="#top" aria-label="Salya, haut de page"><img src="/logos/salya_logo_inverse_nuit.svg" alt="Salya" height="32" style={{ height: 32, width: "auto" }} /></a>
                <p className="footer__lede">La suite de gestion pour les entreprises d’Afrique de l’Ouest. Liggeey, RH et paie.</p>
              </div>
              <div className="span-2 footer__col"><h3>Produit</h3><ul><li><a href="#liggeey">Liggeey</a></li><li><a href="#demo">Démo guidée</a></li><li><a href="#suite">La suite Salya</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Offre</h3><ul><li><a href="#essai">Mois d’essai</a></li><li><a href="#tarifs">Tarifs</a></li><li><a href="#comparatif">Comparatif</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Aide</h3><ul><li><a href="#faq">Questions</a></li><li><a href="#inscription">Contact</a></li></ul></div>
            </div>
            <div className="footer__legal">
              <span>© 2026 Salya &nbsp; <a href="/mentions-legales">Mentions légales</a> &nbsp; <a href="/confidentialite">Confidentialité</a> &nbsp; <a href="/cgv">CGV</a></span>
              <span>Les salariés, montants et taux affichés sont fictifs.</span>
            </div>
          </div>
        </div>
      </footer>

      <nav className="actionbar" aria-label="Actions rapides">
        <a className="btn btn--primary" href="#demo">Essayer la démo guidée</a>
      </nav>

      <a className="wa" href="#inscription">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20l1.2-4.1A8 8 0 1112 20a8 8 0 01-3.9-1z" /><path d="M9 9.5c.3 2 2.5 4.2 4.5 4.5l1.3-1.3-1.8-1-.8.7a3.6 3.6 0 01-1.6-1.6l.7-.8-1-1.8z" /></svg>
        WhatsApp
      </a>
    </>
  );
}
