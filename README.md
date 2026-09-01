# Persora RH — Sourcing qualifié pour Crono Sécurité

Projet annuel — Bachelor Data & Business Intelligence (Chef de projet web, RNCP40857)
NEXA Digital School — Client réel : Crono Sécurité

## État réel de l'infrastructure (au moment de la livraison)

✅ **Base de données Supabase — réellement créée et opérationnelle**
- Projet : `persora-crono-securite` (région eu-west-1)
- URL : `https://motuetyractuxkljqtlk.supabase.co`
- 7 tables créées, RLS activée, 3 comptes de test fonctionnels, données de démonstration insérées
- Vérifié par des requêtes SQL réelles (voir historique des migrations Supabase)

⚠️ **Frontend — code complet et testé (build réussi), déploiement Vercel à finaliser manuellement**
Le déploiement automatique depuis cet environnement n'est pas possible : la CLI Vercel nécessite un accès réseau direct à vercel.com, indisponible dans le bac à sable de génération. De même, je n'ai pas pu pousser directement sur ton dépôt GitHub (l'intégration ne fonctionne que depuis Claude Code, pas depuis cette interface de chat).

**Ce qui a été réellement vérifié avant livraison :**
- `npm run build` s'exécute sans erreur TypeScript (voir capture des logs de build)
- Le schéma SQL a été appliqué pour de vrai sur Supabase (pas seulement écrit)
- 3 comptes d'authentification réels créés via `auth.users` (Supabase Auth), avec mot de passe haché bcrypt
- Les politiques RLS ont été vérifiées par lecture directe de `pg_policies`

## Pour obtenir ta vraie URL publique (5 minutes, sans ligne de commande)

1. Pousse ce code sur ton dépôt GitHub :
   ```bash
   cd frontend
   git init
   git remote add origin https://github.com/972-max/projet-final.git
   git add .
   git commit -m "Persora RH — version initiale"
   git branch -M main
   git push -u origin main
   ```
2. Va sur [vercel.com](https://vercel.com), connecte-toi avec ton compte GitHub
3. Clique sur "Add New Project" → sélectionne `projet-final`
4. Vercel détecte automatiquement Vite/React (aucune configuration à changer)
5. Clique "Deploy" — ton URL publique est prête en moins de 2 minutes

## Identifiants de test

| Rôle | E-mail | Mot de passe |
|---|---|---|
| Responsable RH (admin) | `rh.admin@crono-securite-demo.fr` | `Persora2026!` |
| Chargé de recrutement | `recruteur@crono-securite-demo.fr` | `Persora2026!` |
| Consultation seule | `lecture@crono-securite-demo.fr` | `Persora2026!` |

## Accès direct à la base (pour le jury / vérification)

- Dashboard Supabase : connecte-toi sur [supabase.com](https://supabase.com) avec le compte propriétaire pour consulter le projet `persora-crono-securite`
- Les fichiers `database/01_schema.sql`, `02_seed_demo.sql`, `03_auth_demo_accounts.sql` reproduisent exactement les migrations appliquées, dans l'ordre

## Architecture

```
frontend/         React + TypeScript + Vite, connecté directement à Supabase
                   (pas de backend séparé — Supabase fait office d'API + base
                   de données + authentification, via ses politiques RLS)
database/          Schéma SQL réellement appliqué (dump)
vercel.json        Configuration de routage SPA pour Vercel
```

## Différence structurante avec la version marketing (Persora B2C)

Cette version identifie des personnes nommément (`candidates.full_name`), contrairement à la version segments-marketing anonymisés construite précédemment. Cela implique une table dédiée `consent_events` et un champ `consent_status` sur chaque candidat, pour respecter le droit d'opposition RGPD identifié comme obligatoire en partie 1 du dossier (cf. section "point d'attention légal et méthodologique").

Le score de savoir-être (`savoir_etre_score`) est volontairement présenté comme indicatif dans l'interface, avec un avertissement explicite contre toute décision automatisée — point à développer dans le cahier des charges (partie 1.d) et dans la section conformité (partie 2.e).
