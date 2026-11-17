import type { Metadata } from "next";
import LegalPage, { Ph } from "../LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité | Salya", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        Cette page explique quelles données personnelles le site Salya traite, pourquoi, et quels sont vos droits, conformément à la
        loi sénégalaise n° 2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel.
      </p>
      <h2 className="t-card">Responsable du traitement</h2>
      <p>Groupe Mozaic (<Ph>dénomination sociale exacte</Ph>), Dakar, Sénégal. Contact : WhatsApp +221 77 517 17 77, courriel <Ph>adresse de contact</Ph>.</p>
      <h2 className="t-card">Ce que le site collecte</h2>
      <ul className="rows">
        <li><span className="rows__name">Demande de mois d’essai</span><p>Vous pouvez saisir votre nom, votre entreprise, le nombre de salariés et votre numéro WhatsApp. Le formulaire ne transmet rien : il prépare un message que vous copiez et envoyez vous-même par WhatsApp. Nous ne recevons ces informations que si vous nous écrivez.</p></li>
        <li><span className="rows__name">Démonstration guidée</span><p>Elle fonctionne dans votre navigateur avec des données fictives. Elle ne vous demande aucune donnée personnelle et n’en envoie aucune.</p></li>
        <li><span className="rows__name">Cookies et suivi</span><p>Le site n’utilise ni cookie, ni outil de mesure d’audience, ni publicité.</p></li>
      </ul>
      <h2 className="t-card">Services tiers</h2>
      <p>
        Les polices de caractères sont hébergées sur le site lui-même : aucune requête n’est envoyée à Google ni à un autre service de polices.
        Si vous nous écrivez par WhatsApp, vos messages transitent par WhatsApp (Meta), selon sa propre politique de confidentialité.
      </p>
      <h2 className="t-card">Finalités et base légale</h2>
      <p>
        Nous utilisons les informations que vous nous écrivez uniquement pour répondre à votre demande, ouvrir votre essai et vous proposer une offre.
        La base légale est votre démarche volontaire de nous contacter.
      </p>
      <h2 className="t-card">Durée de conservation</h2>
      <p>Les échanges avec les personnes qui n’ont pas donné suite sont supprimés au bout de <Ph>durée à fixer, par exemple 12 mois</Ph>.</p>
      <h2 className="t-card">Vos droits</h2>
      <p>
        Vous pouvez demander l’accès à vos données, leur rectification, leur suppression, ou vous opposer à leur traitement, en nous écrivant aux coordonnées ci-dessus.
        Vous pouvez aussi saisir la Commission de Protection des Données Personnelles (CDP) du Sénégal.
      </p>
      <h2 className="t-card">Données traitées dans le logiciel Salya RH</h2>
      <p>
        Lorsque vous utiliserez Salya RH avec les données réelles de vos salariés, vous resterez responsable de ces données et nous les traiterons pour votre compte.
        En phase de test, le service est hébergé hors du Sénégal (Supabase et Vercel) et ne traite que des données fictives ; les transferts hors du Sénégal relèvent de la loi 2008-12 et des formalités auprès de la CDP, qui restent à accomplir. Un contrat précisera les mesures de sécurité, l’hébergement, les sauvegardes et la restitution de vos données. Cette politique sera complétée avant l’ouverture du service,
        après les formalités auprès de la CDP : <Ph>déclaration ou autorisation à effectuer avant le lancement</Ph>.
      </p>
    </LegalPage>
  );
}
