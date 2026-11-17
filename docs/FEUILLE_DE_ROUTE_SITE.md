# Feuille de route du site Salya (mise à jour le 17/11/2026, 2e passe)

Source de vérité du produit : `soma-rh-main` (tableau de bord `docs/agents/TABLEAU_DE_BORD.md`, `etat.json`, fiches `relais/`).
Règle : le site ne promet que ce que le produit fait aujourd'hui et que l'on peut prouver (règle d'accroche du produit, `docs/produit/ACCROCHES_SALYA_RH.md`).

## Fait
| Quoi | Détail |
|---|---|
| Correctifs démo et comparatif | Boutons pleins, espacement des étapes, texte non coupé |
| Grille de prix pilote | Essentiel 1 200, Pro 1 500, Verticale 2 500, Cabinets 35 000 / 10 dossiers (liste d'attente), Pack Démarrage 50 000 FCFA ; remises de volume |
| Section Verticale + lien depuis le haut de page | Intérim, gardiennage, hôtellerie, transport, nettoyage |
| Pages légales rédigées | Mentions, confidentialité (loi 2008-12), CGV ; éditeur Groupe Mozaic ; WhatsApp +221 77 517 17 77 |
| Alignement sur la vérité du produit (17/11) | H1 « La paie et les RH du Sénégal, sans tableur » (validé par le propriétaire) ; « première paie en 1 jour », « UEMOA », « la personne qui prépare n'est jamais celle qui approuve » et « chaque étape tracée » retirés ; journal décrit comme « les modifications des données RH et de paie » ; clôture « verrouillée, réouverture tracée » ; « Déclarations officielles » passé de « En cours » à « Prévu » (DEC-02 non tranchée) ; FAQ « vrais salariés » : version de test, données fictives ; hébergement hors Sénégal signalé |

| Décisions du propriétaire (17/11) intégrées | « Liggeey » supprimé partout : Groupe Mozaic édite la gamme Salya (Salya RH, Salya Compta, d'autres à venir), le produit actuel est **Salya RH**. On reste en **version de test, données fictives** (hero, FAQ, inscription, CGV, confidentialité). **Titulaire de la marque : Groupe Mozaic** (mentions légales). **Base fictive** confirmée (C15) |
| Polices auto-hébergées | Bricolage Grotesque (poids + largeur), Figtree, DM Mono dans `public/fonts` avec licences OFL ; plus aucune requête externe (vérifié : 0 requête hors du site) ; mention Google retirée de la confidentialité. L'axe de taille optique de Bricolage n'est pas repris (rendu des titres vérifié) |

## Ce que le produit a livré et que le site peut (ou pourra) dire
| Livré côté produit | Preuve | Sur le site |
|---|---|---|
| Calcul, revue, approbation, suivi des règlements | RPR-01/02, `payment_export` | Dit (accroche, démo). L'application **suit** les règlements, elle n'exécute pas de paiement |
| Période close verrouillée, réouverture tracée | déclencheurs L3 | Dit |
| Journal chaîné | `audit_log`, 58 tables sur 109 | Dit, formulé étroitement (CONF-18) |
| Plusieurs sociétés isolées (étanchéité) | 21a à 21b livrés, tests verts | Pas encore dit : interface (21c) et simulation SIM-MULTI à faire. Cabinets reste « Bientôt » |
| Sauvegarde chiffrée + restauration testée | ROAD-04 terminé | Pas dit : à ajouter après le lot SAUVEGARDE-EXPORT (formules de sauvegarde à fixer) |
| Chiffrement des RIB, MFA admin/paie | ROAD-03 / ROAD-02 | Pas dit : lots encore « bloqués » dans `etat.json` |
| Marque Salya RH, polices auto-hébergées | MARQUE-1 à 3 | Voir « À décider » (nom du produit) |

## Bloquants avant toute ouverture à de vrais clients (porte conformité MARQUE : NO-GO définitif)
1. CONF-15 (Critique) : transfert hors Sénégal sans accord de sous-traitance, formalité CDP non faite.
2. Pages légales : champs du propriétaire à compléter (forme juridique, capital, siège, RCCM, NINEA, directeur de publication, hébergeurs, durées, plafond de responsabilité).
3. C14 : inscriptions Supabase à désactiver (propriétaire). C15 : base fictive, confirmée le 17/11 (à consigner par écrit dans `QUESTIONS_PROPRIETAIRE.md` de soma-rh). C16 : titulaire = Groupe Mozaic, dépôt OAPI de « Salya » à faire par un conseil.
4. Tant que c'est ouvert, le site doit parler de version de test (fait dans la FAQ, la confidentialité et les CGV).

## À décider (propriétaire)
| Sujet | Pourquoi |
|---|---|
| Promesse « mois d'essai avec reprise de vos fichiers » | Reformulée en « accès à la version de test » ; à remettre à l'ouverture aux données réelles (la grille garde « un mois offert ») |
| Pro à 2 000 FCFA | À relever quand exports officiels et mobile money seront livrés (conditions §5.4 du benchmark) |
| Tarifs de sauvegarde (Essentielle, Standard, Renforcée) | Lot SAUVEGARDE-EXPORT : à intégrer à la grille |
| Logo du module | `identite/logos/liggeey_logo_module.svg` n'est plus utilisé sur le site : à retirer ou renommer dans la charte |

## Décision du 17/11 : Salya Compta
Le propriétaire fait une comptabilité avec **son propre moteur** (et non des passerelles seules). Le benchmark déconseillait de construire une compta complète : le risque est assumé. Sur le site, Salya Compta reste « Prévu » (aucune promesse de date ni de contenu tant que le produit n'existe pas) ; les « Passerelles comptables » (Sage, Odoo, SunuCompta) restent affichées comme complément. À faire côté produit : cadrage (SYSCOHADA, plan comptable, journal de paie déjà équilibré dans Salya RH), puis mise à jour de la gamme sur le site.

## À faire ensuite (dans l'ordre)
1. **Comparatif** : après les devis mystère (gabarit `reference/DEVIS_MYSTERE.md`) ; retirer « à préciser avant publication » ensuite.
2. **Après 21c + SIM-MULTI** : ouvrir l'offre Cabinets (de « Liste d'attente » à « Disponible »), parler du cloisonnement entre sociétés (formulation du produit : « Vos données de paie, séparées de celles des autres sociétés », seulement après le test à plusieurs sociétés).
3. **Après la réponse sur DEC-02** (formats NDAMLI et DGID) : passer « Déclarations officielles » à « En cours » puis « Disponible ».
4. **Après SAUVEGARDE-EXPORT** : ajouter sauvegardes et exports XLSX/CSV aux formules.
5. ~~Auto-héberger les polices~~ : fait.
6. **Avant mise en ligne** : compléter les repères des pages légales, faire relire par un juriste, passer les pages en indexables, mettre à jour la confidentialité après les formalités CDP, relancer lint, build et captures.
7. Remplacer le formulaire « message à copier » par un envoi réel seulement après accord sur le traitement des données (aujourd'hui rien n'est transmis, ce qui simplifie la conformité).

## Mise à jour du 17/11 (3e passe)
- Chevauchements corrigés : les sections grandissent avec leur contenu (avant : hauteur fixe d un ou deux écrans, le texte débordait sur la section suivante) ; panneau du comparatif à hauteur minimale sur tablette ; carte bulletin du héros masquée sous 1280 px.
- Page /a-propos (style présentation : fond marine, barre bleue et or) : gamme Salya, fonctionnalités de Salya RH tirées du guide utilisateur du produit, ce qui arrive, guide par rôle, bouton vers la demande d accès. Liens ajoutés au menu et au pied de page.
- Guide utilisateur : les thèmes sont listés sur la page ; le guide complet n est pas publié (dépôt privé, guide encore intitulé SOMA-RH, captures à relire). Il est remis avec l accès à la version de test. À faire : renommer le guide en Salya RH, relire les captures, puis le publier en pages /guide.
- Salya Compta : moteur propre (décision du 17/11), affiché Prévu.
