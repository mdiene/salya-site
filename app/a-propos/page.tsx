import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos | Salya",
  description: "Salya, la gamme de gestion éditée par Groupe Mozaic : Salya RH (paie et RH, version de test), Salya Compta (prévu). Fonctionnalités, feuille de route et guide utilisateur.",
};

// Adresse publique du guide utilisateur, à renseigner quand elle existe (NEXT_PUBLIC_GUIDE_URL).
const GUIDE_URL = process.env.NEXT_PUBLIC_GUIDE_URL;

const GAMME = [
  ["Salya RH", "Version de test", "Paie et ressources humaines pour le Sénégal : de la fiche salarié au bulletin, en FCFA."],
  ["Salya Compta", "Prévu", "Comptabilité bâtie sur notre propre moteur, reliée à Salya RH. Aucune date annoncée."],
  ["Et d’autres", "À venir", "La gamme grandit produit par produit, dans l’ordre de ce que vous nous demandez."],
];

const FONCTIONS: [string, string[]][] = [
  ["Paie", ["Calcul des bulletins du mois : heures supplémentaires, primes, retenues, prorata", "Revue, approbation, validation, suivi des règlements, clôture", "Prêts et avances retenus sur les bulletins, dans la limite d’un plafond", "Simulateur net / brut sans rien enregistrer", "Livre de paie, cotisations dues et versées, charges patronales, écritures comptables"]],
  ["Salariés", ["Assistant de création d’un salarié, avec revue avant la création", "Embauche, sortie, certificat de travail", "Dossiers et documents en espace privé", "Équipes, managers et simulation d’une réorganisation"]],
  ["Congés et temps", ["Dotation, demande et approbation des congés", "Maladie, maternité, permission, absence non payée", "Présences, heures supplémentaires, planning métier, variables du mois"]],
  ["Rôles et traçabilité", ["Administrateur, RH, paie, manager, salarié : chacun son périmètre", "Les modifications des données RH et de paie sont journalisées", "Une période clôturée est verrouillée, sa réouverture est tracée", "Connexion par e-mail, accès par téléphone pour les salariés"]],
];

const A_VENIR = [
  ["Déclarations officielles", "Prévu", "Exports pour l’IPRES, la CSS et les impôts, avec un contrôle avant dépôt."],
  ["Règlement par lot et mobile money", "Bientôt", "Fichiers de virement, Wave et Orange Money. Aujourd’hui, l’application suit les règlements."],
  ["Plusieurs sociétés, offre cabinets", "Bientôt", "Les données de chaque société sont séparées ; l’interface et les essais à plusieurs sociétés restent à faire."],
  ["Salya Compta", "Prévu", "Comptabilité reliée à la paie, sur notre propre moteur."],
];

const GUIDE = [
  "Premiers pas et rôles", "Parcours administrateur, RH, paie, manager et salarié", "Calculer et clôturer la paie",
  "Calendrier de paie, statut par statut", "Créer, embaucher et sortir un salarié", "Congés, présences et planning",
  "États légaux et suivi des cotisations", "Glossaire, questions fréquentes, dépannage",
];

export default function Page() {
  return (
    <main id="top" className="ap">
      <section className="ap-slide ap-cover" aria-labelledby="ap-h">
        <Link className="ap-logo" href="/" aria-label="Salya, retour au site"><img src="/logos/salya_logo_inverse_nuit.svg" alt="Salya" height="64" style={{ height: 64, width: "auto" }} /></Link>
        <h1 id="ap-h">La gamme de gestion pensée pour les entreprises du Sénégal.</h1>
        <p className="ap-sub">En français · En FCFA · Pensée pour le mobile · Version de test, données fictives</p>
        <p className="ap-meta">Présentation de la gamme · Groupe Mozaic · Dakar, Sénégal</p>
      </section>

      <section className="ap-slide" aria-labelledby="ap-gamme">
        <h2 id="ap-gamme">Une gamme, un éditeur.</h2>
        <p className="ap-lead">Salya est développée par Groupe Mozaic, titulaire de la marque. Chaque produit de la gamme a son nom : Salya RH, Salya Compta, et la suite.</p>
        <ul className="ap-cards">
          {GAMME.map(([n, t, d]) => (
            <li key={n}><span className="ap-tag">{t}</span><b>{n}</b><p>{d}</p></li>
          ))}
        </ul>
      </section>

      <section className="ap-slide" aria-labelledby="ap-fn">
        <h2 id="ap-fn">Ce que fait Salya RH aujourd’hui.</h2>
        <p className="ap-lead">Décrit à partir de parcours rejoués dans l’application, avec des données fictives.</p>
        <div className="ap-cols">
          {FONCTIONS.map(([t, l]) => (
            <div key={t}>
              <h3>{t}</h3>
              <ul>{l.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-slide" aria-labelledby="ap-av">
        <h2 id="ap-av">Ce qui arrive.</h2>
        <p className="ap-lead">Nous n’annonçons que ce qui existe. Le reste est marqué prévu ou bientôt, sans date.</p>
        <ul className="ap-cards">
          {A_VENIR.map(([n, t, d]) => (
            <li key={n}><span className="ap-tag">{t}</span><b>{n}</b><p>{d}</p></li>
          ))}
        </ul>
      </section>

      <section className="ap-slide" aria-labelledby="ap-guide">
        <h2 id="ap-guide">Un guide utilisateur, par rôle.</h2>
        <p className="ap-lead">Le guide décrit chaque écran, de la première connexion à la clôture de la paie. {GUIDE_URL ? "Il est en ligne, sans connexion." : "Il est remis avec l’accès à la version de test."}</p>
        <ul className="ap-pills">{GUIDE.map((g) => <li key={g}>{g}</li>)}</ul>
        <p className="ap-ctas">{GUIDE_URL && <a className="ap-cta" href={GUIDE_URL}>Ouvrir le guide utilisateur</a>}<Link className={GUIDE_URL ? "ap-cta ap-cta--ghost" : "ap-cta"} href="/#inscription">Demander l’accès à la version de test</Link></p>
      </section>

      <footer className="ap-foot">
        <span>Salya · Groupe Mozaic · Dakar, Sénégal</span>
        <span><Link href="/mentions-legales">Mentions légales</Link> · <Link href="/confidentialite">Confidentialité</Link> · <Link href="/cgv">CGV</Link></span>
      </footer>
    </main>
  );
}
