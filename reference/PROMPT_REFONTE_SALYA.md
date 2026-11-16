# Prompt de refonte du site Salya / Liggeey (à coller dans Claude Code, dossier C:\IT-Mozaic\salya-site)

## Rôle et contexte
Tu reprends le site commercial **Salya** (suite de gestion pour l'Afrique de l'Ouest, démarrage Sénégal). Premier module : **Liggeey** (RH et paie, basé sur l'application SOMA-RH de Moussa Diene, Dakar). Modules suivants (comptabilité, autres) : « Bientôt », avec liste d'attente.
Objectif : lancer le produit, faire tester gratuitement un mois, avec reprise assistée des données existantes, face aux logiciels propriétaires. Public : DRH, responsables paie, comptables, cabinets, dirigeants de PME. Mobile d'abord, français, FCFA, WhatsApp, mobile money.

## Point de départ (à lire en premier)
1. `maquette-v1-index.html` (dans ce dossier) : maquette v1 validée par le propriétaire. **Conserve son fonctionnement et son architecture** : sections et ordre (héros avec bulletin animé, piliers, démo guidée en 4 étapes, modules Liggeey, flux de statuts de paie, mois d'essai en 4 temps, suite Salya, comparatif, tarifs, FAQ, contact, bouton WhatsApp flottant), logique de la démo (profil, import de 6 salariés fictifs dont une ligne à corriger, mode de paiement, calcul Brouillon→Calculée→En revue→Approuvée, règlement par lot), textes et ton humain.
2. `.claude/skills/` : skills installés. Lis leurs SKILL.md avant d'écrire du code.

## Ce qui change : un design nettement plus professionnel
La v1 est une maquette à fichier unique. Reconstruis-la au niveau d'un site d'éditeur SaaS premium (références de niveau : figma.com, linear.app, qonto.com), sans perdre la chaleur locale.
- Palette « Bazin et sable » à garder : bazin #2F3A8F, nuit #161A3A / #0F1230, latérite #C8441F (boutons principaux uniquement, jamais en petit texte), mangue #F5B83D, baobab #1F7A5C, sable #FAF5EC / #F1EADC, encre #1A1A24, brume #E7DFD0. Polices : Bricolage Grotesque (titres) + Figtree (texte). Motif signature : treillis bazin.
- Contrastes WCAG AA minimum. Mouvement sobre et utile, `prefers-reduced-motion` respecté, contenu visible au repos.
- Visuels : vraies captures de l'application ou interface produit reconstruite en HTML ; photos réelles (pas d'illustrations génériques) ; aucune image de personne réelle identifiable.
- Pas de rendu « généré par IA » : copie sobre, spécifique, sans formules creuses.

## Comment utiliser les skills (ordre)
1. `design-taste-frontend` (Taste Skill) : direction générale, système unique, une section par écran, moments d'animation maîtrisés, **puis le contrôle de fin** (gate) sur le site construit, en corrigeant tous les FAIL. Ses outils téléchargent des photos libres et des icônes : note les licences dans un fichier `CREDITS.md`.
2. `ui-ux-pro-max` : règles UX, accessibilité, typographie, graphiques ; `design-system` + `ui-styling` : jetons de design et composants (Tailwind, shadcn/ui).
3. `vercel-react-best-practices` et `vercel-composition-patterns` : qualité du code React/Next.js ; `web-design-guidelines` : audit final de l'interface.
4. `webapp-testing` : tests Playwright de la démo guidée, du menu mobile, du formulaire, aux largeurs 320, 390 et 1440 px.
5. `supabase` et `supabase-postgres-best-practices` : seulement pour le formulaire d'inscription et la liste d'attente (voir plus bas).

## Pile technique
Next.js (App Router) + TypeScript + Tailwind, déployable sur Vercel, site en français uniquement pour l'instant (structure prête pour d'autres langues). Léger : bonnes notes Lighthouse sur mobile, images optimisées, pas de bibliothèque d'animation lourde sans raison.

## Règles de vérité (non négociables)
- **Aucun fait inventé.** Prix, numéro WhatsApp, conformité légale (IPRES, CSS, impôts), noms de concurrents et leurs prix, chiffres de clients : laisse des marqueurs visibles `[X]`, `[à valider]`, `+221 [numéro]` comme dans la v1. Le comparatif reste « indicatif ».
- Les données de la démo sont fictives et signalées comme telles ; le taux de retenue de 18 % est illustratif. Le règlement par lot est une démonstration (le paiement réel n'existe pas encore).
- Pas de faux avis, faux logos clients ni faux compteurs.
- Mentions légales, confidentialité, CGV : pages avec « [à rédiger] ».
- Marques Salya et Liggeey et domaines : non vérifiés, ne rien affirmer.

## Formulaire et essai
Formulaire d'inscription à l'essai et liste d'attente : à relier à Supabase uniquement après mon accord, avec RLS, validation côté serveur, protection anti-spam et consentement. Sans accord, le formulaire reste comme dans la v1 (prépare un message copiable). Ne mets jamais de clé secrète dans le dépôt.

## Livraison attendue
1. Plan court (structure, système de design, liste des pages) à valider avant de coder.
2. Site en local (`npm run dev`), contrôle Taste passé, audit web-design-guidelines, tests Playwright verts, notes Lighthouse mobile.
3. Aperçu Vercel seulement après mon accord.
4. Rapport final : ce qui est fait, ce qui reste en marqueurs à me faire valider, et les décisions que j'ai à prendre (prix, numéro, textes légaux).

Commence par lire la maquette et les SKILL.md, puis propose le plan.
