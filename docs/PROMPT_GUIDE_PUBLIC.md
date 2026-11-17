# Prompt à donner à la session qui gère soma-rh-main (guide utilisateur public)

Copier-coller le texte ci-dessous dans la session qui gère `C:\IT-Mozaic\soma-rh-main` (agents soma-doc, soma-codage, soma-tests, soma-conformite ; orchestrateur si besoin).

---

Contexte : le site vitrine Salya (`C:\IT-Mozaic\salya-site`, dépôt privé mdiene/salya-site) présente la gamme Salya (éditeur Groupe Mozaic) et veut proposer un lien vers le guide utilisateur de Salya RH. Aujourd'hui le guide n'est lisible qu'après connexion : la route `/aide` (composant `web/src/components/UserGuideTab.tsx`, sources `docs/guide-utilisateur/*.mdx`) est dans `Layout`, derrière l'authentification. Seules `mentions-legales`, `confidentialite` et `conditions-utilisation` sont publiques (`PublicLegalShell`, `web/src/App.tsx`). Le dépôt est privé, donc aucun visiteur ne peut ouvrir les fichiers.

Décisions du propriétaire (17/11/2026) : on reste en **version de test, données fictives** ; la base en ligne est fictive ; Groupe Mozaic est éditeur et titulaire de la marque Salya ; le produit s'appelle **Salya RH** (gamme Salya : Salya RH, Salya Compta, d'autres).

Demande, en deux livrables :

1. **Rendre le guide public (lecture seule, sans connexion).**
   - Ajouter des routes publiques, sur le modèle des pages légales publiques (CONF-V1.3), par exemple `/guide` (sommaire par rôle et par tâche, repris de `docs/guide-utilisateur/index.mdx` et du groupe « Guide utilisateur » de `docs/docs.json`) et `/guide/:slug`. Réutiliser le rendu de `UserGuideTab` (pas de seconde rédaction : une seule source, `docs/guide-utilisateur`).
   - Aucune donnée ni appel authentifié : le guide ne doit rien lire dans Supabase. Bandeau permanent « Version de test, données fictives » (comme CONF-20). `noindex` tant que le propriétaire n'a pas dit « indexable ».
   - **Avant publication, nettoyer le contenu** : remplacer « SOMA-RH » et la mention de la Société Minière Africaine par « Salya RH » ; relire chaque capture (`docs/guide-utilisateur/captures`, `captures-sim`) et n'exposer que celles sans donnée personnelle (relancer `scan-pii`, exclure celles retirées de l'index par dd28458) ; vérifier que les pages « Dépannage » et « Limites connues » ne divulguent ni chemin interne, ni secret, ni nom de personne réelle ; aucune promesse non prouvée (règle d'accroche : pas de « conforme », « sécurisé », « en 1 jour » ; seulement le Sénégal, pas « UEMOA »).
   - Mettre à jour le menu de l'application si besoin (« Aide et guide utilisateur » reste pour les connectés).

2. **Me donner le lien d'accès hors connexion.**
   - Une URL ouvrable sans compte (par exemple `https://<domaine-vercel>/guide`) que le propriétaire collera dans la variable `NEXT_PUBLIC_GUIDE_URL` du site Salya. Tant que le déploiement en ligne n'est pas accordé, donner au moins un **lien local** testé (`http://localhost:5173/guide`) et un **export statique** du guide (dossier HTML autonome, captures incluses) que le propriétaire peut ouvrir sans connexion.
   - Indiquer précisément ce qui reste à faire pour la mise en ligne.

Contraintes du projet (à respecter) : ne rien pousser ni fusionner dans `main` ni déployer sans l'accord explicite du propriétaire (DEC-04, ROAD-07 ; déploiement Vercel : `VITE_DEFAULT_THEME=salya`, `VITE_EDITOR_NAME="Groupe Mozaic"`, `VITE_APP_ENV=test`, refaire les étapes à la main si `scripts/vercel-deploy.ps1` échoue sous Claude Code) ; pas de secrets dans les commandes ; Vite sur le port 5173 seulement ; un seul Playwright à la fois ; données personnelles jamais dans les fichiers suivis par Git ; migration seulement si une table est nécessaire (ce n'est pas prévu).

Contrôles avant de rendre : `npm run check` et `npm run build` (depuis `web/`), tests unitaires, `e2e/menu.spec.ts` et `e2e/a11y.spec.ts` au vert, un test e2e qui ouvre `/guide` et une page `/guide/<slug>` **sans session** (aucune redirection vers la connexion), `scan-pii` sur les captures exposées. Rendre une fiche de relais dans `docs/agents/relais/` avec : routes ajoutées, commits, preuves exécutées, lien d'accès hors connexion, et ce qui attend l'accord du propriétaire.
