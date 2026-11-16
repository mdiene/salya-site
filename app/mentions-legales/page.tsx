import type { Metadata } from "next";
import LegalPage, { Ph } from "../LegalPage";

export const metadata: Metadata = { title: "Mentions légales | Salya", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Mentions légales">
      <h2 className="t-card">Éditeur du site</h2>
      <p>
        Le site Salya est édité par <Ph>dénomination sociale</Ph>, <Ph>forme juridique</Ph> au capital de <Ph>montant</Ph> FCFA,
        dont le siège est situé à <Ph>adresse complète</Ph>, Dakar, Sénégal.<br />
        NINEA : <Ph>numéro</Ph> · RCCM : <Ph>numéro</Ph><br />
        Directeur de la publication : <Ph>nom et fonction</Ph>
      </p>
      <h2 className="t-card">Contact</h2>
      <p>WhatsApp : +221 77 517 17 77<br />Courriel : <Ph>adresse de contact</Ph></p>
      <h2 className="t-card">Hébergement</h2>
      <p>Le site est hébergé par <Ph>nom de l’hébergeur, adresse</Ph>.</p>
      <h2 className="t-card">Propriété intellectuelle</h2>
      <p>
        Les textes, images, logos, marques et éléments graphiques du site, y compris les noms Salya et Liggeey, sont protégés.
        Toute reproduction ou réutilisation sans accord écrit préalable de l’éditeur est interdite.
      </p>
      <h2 className="t-card">Données fictives</h2>
      <p>
        Les salariés, montants, taux et notifications présentés dans la démonstration et les illustrations du site sont fictifs.
        Ils ne représentent aucune personne ni aucune entreprise réelle.
      </p>
      <h2 className="t-card">Responsabilité</h2>
      <p>
        L’éditeur s’efforce de publier des informations exactes, mais ne garantit pas l’absence d’erreur. Les prix affichés sont indicatifs
        et valables dans le cadre de l’offre pilote ; seul le devis ou la commande signée engage l’éditeur.
      </p>
      <h2 className="t-card">Droit applicable</h2>
      <p>Le site est soumis au droit sénégalais. En cas de litige, les tribunaux de Dakar sont compétents, sauf disposition légale contraire.</p>
    </LegalPage>
  );
}
