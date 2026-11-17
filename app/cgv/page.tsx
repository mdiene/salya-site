import type { Metadata } from "next";
import LegalPage, { Ph } from "../LegalPage";

export const metadata: Metadata = { title: "Conditions générales de vente | Salya", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Conditions générales de vente">
      <h2 className="t-card">1. Objet</h2>
      <p>
        Ces conditions régissent l’abonnement au logiciel de paie et de ressources humaines Salya RH, édité par Groupe Mozaic (<Ph>dénomination sociale exacte</Ph>) (« l’éditeur »),
        par toute entreprise ou tout cabinet (« le client »). Elles s’appliquent à l’offre pilote décrite ci-dessous.
      </p>
      <h2 className="t-card">2. Offres et prix</h2>
      <p>Les prix sont en francs CFA (FCFA), hors taxes, par salarié payé dans le mois, avec un minimum mensuel selon la formule.</p>
      <ul className="rows">
        <li><span className="rows__name">Essentiel</span><p>6 à 50 salariés : 1 200 FCFA par salarié et par mois, minimum 12 000 FCFA par mois.</p></li>
        <li><span className="rows__name">Pro</span><p>20 à 300 salariés : 1 500 FCFA par salarié et par mois, minimum 30 000 FCFA par mois.</p></li>
        <li><span className="rows__name">Verticale</span><p>Intérim, gardiennage, hôtellerie et restauration, transport, nettoyage : 2 500 FCFA par salarié et par mois.</p></li>
        <li><span className="rows__name">Cabinets</span><p>Sur liste d’attente : 35 000 FCFA par mois pour 10 dossiers, puis 3 000 FCFA par dossier supplémentaire.</p></li>
        <li><span className="rows__name">Grandes entreprises</span><p>Plus de 300 salariés : sur devis.</p></li>
        <li><span className="rows__name">Pack Démarrage</span><p>Reprise de l’existant, paramétrage et formation : 50 000 FCFA, forfait unique et facultatif.</p></li>
      </ul>
      <p>
        Remises de volume sur le prix par salarié : 10 % de 11 à 30 salariés, 20 % de 31 à 75, 30 % au-delà. Les mises à jour des taux et plafonds légaux sont comprises dans l’abonnement.
        Les taxes applicables s’ajoutent au prix.
      </p>
      <h2 className="t-card">3. Offre pilote</h2>
      <p>
        Les prix ci-dessus sont des tarifs pilote. Certaines fonctions sont en cours de développement : déclarations officielles, règlement par lot et mobile money,
        double authentification. Elles ne font partie du service qu’une fois annoncées comme disponibles. Pendant la phase de test, le service ne traite que des données fictives. En échange du tarif pilote, l’éditeur peut demander au client un retour d’expérience.
      </p>
      <h2 className="t-card">4. Essai</h2>
      <p>Le premier mois est offert : aucun paiement n’est dû avant la fin de l’essai. Le client peut arrêter à tout moment pendant l’essai sans frais.</p>
      <h2 className="t-card">5. Facturation et paiement</h2>
      <p>
        L’abonnement est facturé chaque mois sur la base du nombre de salariés payés. Le paiement est dû sous <Ph>délai, par exemple 15 jours</Ph> par <Ph>moyens de paiement acceptés</Ph>.
        En cas de retard, l’éditeur peut suspendre l’accès après mise en demeure restée sans effet pendant <Ph>délai</Ph>.
      </p>
      <h2 className="t-card">6. Durée et résiliation</h2>
      <p>L’abonnement est mensuel et se renouvelle tacitement. Le client peut le résilier à tout moment par écrit ; la résiliation prend effet à la fin du mois en cours.</p>
      <h2 className="t-card">7. Données du client</h2>
      <p>
        Le client reste propriétaire de ses données et responsable de leur exactitude. L’éditeur les traite pour le compte du client, uniquement pour fournir le service.
        À la fin du contrat, le client peut récupérer ses données dans un format lisible pendant <Ph>durée, par exemple 30 jours</Ph>, puis elles sont supprimées.
      </p>
      <h2 className="t-card">8. Obligations et responsabilité</h2>
      <p>
        L’éditeur fournit le logiciel avec le soin d’un professionnel et tient à jour les paramètres légaux. Le client reste responsable de la vérification de ses bulletins et de ses déclarations
        avant leur validation. La responsabilité de l’éditeur est limitée aux dommages directs, dans la limite de <Ph>plafond, par exemple les sommes versées sur les 12 derniers mois</Ph>.
      </p>
      <h2 className="t-card">9. Droit applicable et litiges</h2>
      <p>Ces conditions sont soumises au droit sénégalais. À défaut d’accord amiable, les tribunaux de Dakar sont compétents.</p>
    </LegalPage>
  );
}
