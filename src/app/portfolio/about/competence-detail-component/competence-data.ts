// src/app/data/competence-data.ts
export interface CompetenceMarkdown {
    name: string;
    markdown: string;
  }


  export const COMPETENCES: CompetenceMarkdown[] = [
    {
      name: 'Angular',
      markdown: `
  ## 🧠 Angular
  
  **Angular** est un framework front-end structuré basé sur **TypeScript**, développé par Google.
  
  ---
  
  ### 🔎 Ma définition
  Angular permet de construire des applications web modulaires, performantes et maintenables grâce à une architecture basée sur les **composants**, les **services** et le **data binding**.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Création de dashboards interactifs pour la gestion de projets.
  - Intégration d’une API REST (Django) via \`HttpClient\`.
  - Utilisation de \`ReactiveForms\` pour des formulaires dynamiques.
  - Mise en place du routing avec navigation conditionnelle.
  
  ---
  
  ### 🧪 Mon autocritique
  - Bonne maîtrise des concepts fondamentaux (modules, composants, services).
  - Difficultés initiales avec RxJS et la gestion asynchrone.
  - Peu d’expérience avec les tests unitaires (\`TestBed\`, mocks).
  
  ---
  
  ### 📈 Mon évolution
  - Lecture approfondie de la documentation officielle Angular.
  - Réalisation de projets personnels avec fonctionnalités complexes.
  - Progrès constants sur la gestion d’état et les performances.
  `
    },
    {
      name: 'Flask',
      markdown: `
  ## 🐍 Flask
  
  **Flask** est un micro-framework web écrit en **Python**, léger, simple et modulaire.
  
  ---
  
  ### 🔎 Ma définition
  Flask permet de créer rapidement des **APIs REST** ou des applications web, avec une architecture claire et un fort potentiel d’extension.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Développement d’un simulateur de monnayeur basé sur Flask.
  - Routing clair via les décorateurs Python.
  - Utilisation de fichiers JSON pour la persistance.
  - API REST consommée par un front-end Angular.
  
  ---
  
  ### 🧪 Mon autocritique
  - À l’aise avec les routes, vues, JSON et templates.
  - Peu d’automatisation des tests (unitaires, intégration).
  - Gestion d’erreurs (404, 500) encore perfectible.
  
  ---
  
  ### 📈 Mon évolution
  - Intégration d’extensions : \`Flask-SQLAlchemy\`, \`Flask-Login\`, \`Flask-CORS\`.
  - Utilisation des \`Blueprints\` pour structurer l’application.
  - Déploiement en production via Gunicorn + Nginx sur un VPS.
  `
    },
    {
      name: 'JavaScript',
      markdown: `
  ## 💻 JavaScript
  
  JavaScript est le langage principal du web, permettant d’ajouter de l’interactivité côté client.
  
  ---
  
  ### 🔎 Ma définition
  JavaScript permet de manipuler dynamiquement le DOM, gérer les événements et créer des applications web interactives.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Développement d’interfaces interactives avec vanilla JS.
  - Intégration d’appels AJAX pour récupérer des données dynamiquement.
  - Manipulation d’éléments DOM, écouteurs d’événements, temporisation.
  
  ---
  
  ### 🧪 Mon autocritique
  - Bonne maîtrise du langage de base.
  - Difficultés initiales avec le scope et les closures.
  - Besoin de renforcer les bonnes pratiques ES6+.
  
  ---
  
  ### 📈 Mon évolution
  - Transition progressive vers ES6 (arrow functions, destructuring).
  - Compréhension des promesses, async/await.
  - Intégration poussée dans les frameworks (Angular, React).
  `
    },

    {
      name: 'Django',
      markdown: `
  ## 🧱 Django
  
  Django est un framework web Python complet et structuré, orienté vers le développement rapide d’applications sécurisées.
  
  ---
  
  ### 🔎 Ma définition
  Django propose une approche “batteries incluses” : ORM, admin automatique, routing, templating, et sécurité intégrée.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Développement d’une API REST avec Django REST Framework.
  - Utilisation de l’admin pour la gestion de contenu.
  - Authentification, gestion des permissions, filtres et pagination.
  
  ---
  
  ### 🧪 Mon autocritique
  - Très à l’aise avec l’architecture MVC et l’ORM.
  - Difficultés au début avec les relations complexes dans les modèles.
  - Besoin de mieux maîtriser les middlewares personnalisés.
  
  ---
  
  ### 📈 Mon évolution
  - Création de projets avec architecture modulaire.
  - Déploiement sur VPS avec Gunicorn + Nginx.
  - Tests unitaires avec \`pytest-django\`.
  `
    },

    {
      name: 'React',
      markdown: `
  ## ⚛️ React
  
  React est une bibliothèque JavaScript développée par Meta pour créer des interfaces utilisateurs dynamiques.
  
  ---
  
  ### 🔎 Ma définition
  React repose sur une architecture à base de composants fonctionnels avec état local, props et cycle de vie.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Réalisation de composants réutilisables.
  - Utilisation de hooks comme \`useState\`, \`useEffect\`.
  - Intégration d’APIs REST avec \`fetch\` ou \`axios\`.
  
  ---
  
  ### 🧪 Mon autocritique
  - Bonne compréhension des composants fonctionnels.
  - Difficultés avec le typage en TypeScript au début.
  - Besoin de structurer les projets de façon plus scalable.
  
  ---
  
  ### 📈 Mon évolution
  - Passage aux hooks modernes, gestion d’état avec context.
  - Découverte de Next.js pour le rendu côté serveur.
  - Déploiement d’applications React sur Vercel.
  `
    },

    {
      name: 'TypeScript',
      markdown: `
  ## 🧩 TypeScript
  
  TypeScript est un sur-ensemble de JavaScript qui ajoute le typage statique.
  
  ---
  
  ### 🔎 Ma définition
  TypeScript améliore la lisibilité, la robustesse et l’évolutivité du code grâce à la détection d’erreurs à la compilation.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Utilisation quotidienne avec Angular.
  - Création d’interfaces, types personnalisés et enums.
  - Sécurisation des appels d’API par typage des réponses attendues.
  
  ---
  
  ### 🧪 Mon autocritique
  - Bon niveau en typage simple et interfaces.
  - Complexité ressentie sur les types génériques et utilitaires avancés.
  - Typage parfois trop rigide si mal utilisé.
  
  ---
  
  ### 📈 Mon évolution
  - Documentation et projets orientés typage fort.
  - Utilisation de types avancés (mapped, union, intersection).
  - Refactoring de code JS vers TS pour fiabilisation.
  `
    },

    {
      name: 'Node.js',
      markdown: `
  ## 🌐 Node.js
  
  Node.js est un environnement d’exécution JavaScript côté serveur, basé sur le moteur V8 de Chrome.
  
  ---
  
  ### 🔎 Ma définition
  Node.js permet d’exécuter du JS en dehors du navigateur, notamment pour créer des serveurs web légers et performants.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Création d’APIs simples avec Express.
  - Manipulation de fichiers système avec \`fs\`.
  - Gestion des routes, middlewares, et réponses JSON.
  
  ---
  
  ### 🧪 Mon autocritique
  - À l’aise avec Express et les middlewares.
  - Moins expérimenté avec les streams et la gestion fine des événements.
  - Besoin d’améliorer la sécurisation des endpoints.
  
  ---
  
  ### 📈 Mon évolution
  - Introduction à NestJS pour structurer les projets Node.
  - Meilleure gestion des erreurs et de la validation avec \`joi\` ou \`zod\`.
  - Utilisation de \`dotenv\` et \`nodemon\` pour la config et le dev.
  `
    },
    {
      name: 'MySQL',
      markdown: `
  ## 🗄️ MySQL
  
  MySQL est un système de gestion de base de données relationnelle (SGBDR) très répandu.
  
  ---
  
  ### 🔎 Ma définition
  MySQL permet de stocker, interroger et organiser des données structurées à l’aide du langage SQL.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Modélisation de bases relationnelles pour applications web.
  - Utilisation de JOIN, GROUP BY, et sous-requêtes.
  - Création de vues et procédures stockées simples.
  
  ---
  
  ### 🧪 Mon autocritique
  - Maîtrise correcte des requêtes standards.
  - Besoin de renforcer les compétences sur l’optimisation (index, EXPLAIN).
  - Gestion des migrations parfois manuelle.
  
  ---
  
  ### 📈 Mon évolution
  - Utilisation via ORM (Doctrine, Sequelize).
  - Sauvegardes automatiques via scripts.
  - Tests avec Docker (image \`mysql:8\`) pour environnement de dev.
  `
    },

    {
      name: 'Symfony',
      markdown: `
  ## 🧬 Symfony
  
  Symfony est un framework PHP complet pour des applications web robustes, bien architecturées et sécurisées.
  
  ---
  
  ### 🔎 Ma définition
  Symfony repose sur une architecture MVC stricte et orientée bonnes pratiques (routes, contrôleurs, services, événements...).
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Développement CRUD complet avec Doctrine ORM.
  - Utilisation des commandes CLI Symfony pour générer code et migrations.
  - Mise en place d’une API JSON avec normalisateurs et sérialisation.
  
  ---
  
  ### 🧪 Mon autocritique
  - À l’aise avec la structure MVC et les entités Doctrine.
  - Complexité ressentie avec les événements et services imbriqués.
  - Peu d’expérience avec les tests fonctionnels Symfony.
  
  ---
  
  ### 📈 Mon évolution
  - Utilisation de bundles avancés (Security, ApiPlatform).
  - Optimisation des requêtes avec QueryBuilder.
  - Découverte de Symfony UX et Twig pour les interactions modernes.
  `
    },

    {
      name: 'Python',
      markdown: `
  ## 🐍 Python
  
  Python est un langage de programmation polyvalent, lisible et puissant.
  
  ---
  
  ### 🔎 Ma définition
  Python favorise la simplicité, avec une grande richesse de bibliothèques pour la data, le web, l’automatisation ou l’embarqué.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Développement d’APIs avec Flask et Django.
  - Scripts d’automatisation et parsing de fichiers.
  - Simulations industrielles et TP électroniques.
  
  ---
  
  ### 🧪 Mon autocritique
  - Très bonne aisance en scripting, APIs, automatisation.
  - Moins d’expérience sur les tests automatisés et coverage.
  - À améliorer : performance sur gros volumes de données.
  
  ---
  
  ### 📈 Mon évolution
  - Projets matériels (capteurs, simulateurs) pilotés en Python.
  - Utilisation de bibliothèques spécifiques (ctypes, pandas, FastAPI).
  - Réécriture d’algorithmes pour optimisation.
  `
    },

    {
      name: 'Git',
      markdown: `
  ## 🔁 Git
  
  Git est un système de gestion de versions distribué, essentiel en développement collaboratif.
  
  ---
  
  ### 🔎 Ma définition
  Git permet de suivre l’évolution d’un projet, de gérer les branches, les versions et de collaborer efficacement.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Utilisation quotidienne avec GitHub.
  - Gestion de branches, rebase, merge, conflits.
  - Intégration dans des workflows CI/CD avec GitLab CI et GitHub Actions.
  
  ---
  
  ### 🧪 Mon autocritique
  - Très bon usage des commandes courantes.
  - Difficultés initiales avec les rebase interactifs.
  - Besoin d’approfondir la gestion des tags et releases.
  
  ---
  
  ### 📈 Mon évolution
  - Mise en place de workflows Git professionnels.
  - Documentation des conventions de commit.
  - Utilisation avancée avec sous-modules, hooks et GitOps.
  `
    }
  
    
  ];
  