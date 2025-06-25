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

  Angular, c’est le premier framework front avec lequel je me suis vraiment senti à l’aise. Il gère pour moi la liaison entre HTML, CSS et JavaScript, ce qui me fait gagner un temps fou. J’aime sa façon de structurer l’application en composants, chacun pouvant en contenir d’autres, comme un système de blocs bien organisés. En tant que développeur plutôt orienté back-end, c’est justement cette rigueur qui me plaît. Je n’ai pas besoin de tout réinventer à chaque fois, tout est pensé pour rester clair et maintenable. Et puis, Angular est très demandé sur le marché. Je le vois souvent dans les offres des entreprises exigeantes, donc le maîtriser, c’est clairement un plus.

  ---
  
  ### 📂 Mes éléments de preuve
  - Création de dashboards interactifs pour la gestion de projets.
  - Intégration d’une API REST (Django) via \`HttpClient\`.
  - Mise en place du routing avec navigation conditionnelle.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="https://github.com/TalebMaham/to_do_app">Depot Application Gestion de projet</a>
  </div>

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

  Flask, c’est le framework que j’utilise quand je veux aller droit au but. Il est léger, simple à comprendre, et me permet de mettre en place une API propre sans perdre de temps. Je l’utilise souvent comme une couche intermédiaire dans mes projets : pour filtrer les données, sécuriser, sérialiser, ou simplement mieux organiser les échanges avant d’attaquer une API plus lourde, comme une Django REST. Même quand ce n’est pas obligatoire, j’ai tendance à le glisser dans mes projets, parce qu’il s’intègre bien avec tout ce que j’utilise. Il est un peu devenu mon outil passe-partout côté back.

  ---
  
  ### 📂 Mes éléments de preuve
  - Développement d’un simulateur de monnayeur basé sur Flask.
  - Routing clair via les décorateurs Python.
  - Utilisation de fichiers JSON pour la persistance.
  - API REST consommée par un front-end Angular.

  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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

  JavaScript, c’est la base. Tous les frameworks front reposent dessus, donc il faut le comprendre avant tout le reste. Au début, je l’ai utilisé sans rien autour, juste en “vanille”, pour manipuler le DOM, réagir à des clics, et rendre les pages interactives. Et franchement, ça m’a appris énormément. Il y a plein de cas où un framework complet est inutile : un peu de JS suffit pour faire le boulot. Pour moi, il est indispensable de commencer avec JavaScript seul. Et puis, on ne peut pas utiliser TypeScript sérieusement sans avoir les bases de JS, surtout que TypeScript finit toujours par redevenir du JavaScript à l’exécution.

  ---
  
  ### 📂 Mes éléments de preuve
  - Développement d’interfaces interactives avec vanilla JS.
  - Intégration d’appels AJAX pour récupérer des données dynamiquement.
  - Manipulation d’éléments DOM, écouteurs d’événements, temporisation.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
  
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

  Django m’a simplifié la vie. Avant, transformer une classe en table, gérer les erreurs, faire les vérifications… c’était long et parfois pénible. Avec Django, je peux tout poser clairement avec son ORM, et ça fonctionne sans devoir écrire des tonnes de code. Ce que j’apprécie aussi, c’est qu’il prend en charge l’admin, la sécurité, les routes, tout est déjà prêt. La gestion des rôles, des groupes, des permissions... tout est pensé. Et comme c’est en Python, c’est lisible et rapide à prendre en main. Dès que je dois créer une API propre et bien structurée, je pense d’abord à Django.

      
  ---
  
  ### 📂 Mes éléments de preuve
  - Développement d’une API REST avec Django REST Framework.
  - Utilisation de l’admin pour la gestion de contenu.
  - Authentification, gestion des permissions, filtres et pagination.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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
  <div style="margin-top: 1rem;">
   <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
  </div>
  
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

  TypeScript m’a vraiment fait gagner en confort. Les erreurs de typage, c’est souvent les pires à repérer, surtout quand le bug arrive loin dans le code. Avec TypeScript, je les vois avant même d’exécuter quoi que ce soit. Le fait que le langage soit fortement typé me force à réfléchir clairement à ce que je fais. Et dans mon entreprise, la différence est flagrante : le front en TypeScript est beaucoup plus stable que le back en Python. Cette rigueur imposée par le typage, au final, elle m’aide à écrire du code plus propre, plus solide, et plus prévisible.

    
  ---
  
  ### 📂 Mes éléments de preuve
  - Utilisation quotidienne avec Angular.
  - Création d’interfaces, types personnalisés et enums.
  - Sécurisation des appels d’API par typage des réponses attendues.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="https://github.com/TalebMaham/to_do_app">Depot Application Gestion de projet</a>
  </div>
  
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
      name: 'Nodejs',
      markdown: `
  ## 🌐 Node.js
  
  Node.js est un environnement d’exécution JavaScript côté serveur, basé sur le moteur V8 de Chrome.
  
  ---
  
  ### 🔎 Ma définition

  Node.js m’a permis de sortir JavaScript du navigateur et de créer des serveurs simples, rapides et efficaces. Ce que j’aime, c’est sa légèreté : je peux lancer une API en quelques lignes, sans grosse configuration. Il gère très bien les requêtes simultanées, même sur des machines limitées. Tous les projets Node.js que j’ai sur mon GitHub sont perso, souvent faits pour tester une idée ou automatiser une tâche. Je ne l’utilise pas en entreprise, mais je le garde toujours sous la main. Pour moi, c’est un bon outil de secours quand j’ai besoin d’aller vite ou de rester 100 % JavaScript, du front au back.

  
  ---
  
  ### 📂 Mes éléments de preuve
  - Création d’APIs simples avec Express.
  - Manipulation de fichiers système avec \`fs\`.
  - Gestion des routes, middlewares, et réponses JSON.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="https://github.com/TalebMaham/PayEase">Depot d'une application de e-commerce</a>
  </div>
  
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

  MySQL me sert à stocker et organiser des données de manière structurée avec le langage SQL. C’est la première base de données que j’ai utilisée dans mes projets, et c’est avec elle que j’ai vraiment compris ce que signifie créer des relations entre des tables, poser les bonnes clés, et interroger les données efficacement. J’ai aussi appris à optimiser mes requêtes quand les volumes grandissaient. Aujourd’hui encore, c’est la base que j’utilise le plus, parce qu’elle est simple à mettre en place, stable et compatible avec tous les outils que j’utilise. Elle m’a permis de construire des projets concrets, durables, avec une vraie logique de persistance.
    
  ---
  
  ### 📂 Mes éléments de preuve
  - Modélisation de bases relationnelles pour applications web.
  - Utilisation de JOIN, GROUP BY, et sous-requêtes.
  - Création de vues et procédures stockées simples.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de Stock</a>
    <a class="btn btn-outline-secondary" href="https://github.com/TalebMaham/PayEase">Depot d'une application de e-commerce</a>
    <a class="btn btn-outline-secondary" href="https://github.com/TalebMaham/PayEase">Depot d'une application de e-commerce</a>
  </div>
  
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

  Symfony, c’est avec lui que j’ai vraiment compris le modèle MVC. Avant, je bricolais sans trop savoir comment structurer mes projets. Avec Symfony, tout devient clair : on sépare ce qui affiche, ce qui traite, et ce qui stocke. C’est le premier framework qui m’a imposé une vraie rigueur. J’ai appris à bien organiser mon code, à utiliser des services, des contrôleurs propres, à penser sécurité, validations, et logique métier de façon claire. Même si aujourd’hui j’utilise d’autres outils selon les projets, Symfony reste pour moi la meilleure école pour apprendre à coder proprement côté back.

  ---
  
  ### 📂 Mes éléments de preuve
  - Développement CRUD complet avec Doctrine ORM.
  - Utilisation des commandes CLI Symfony pour générer code et migrations.
  - Mise en place d’une API JSON avec normalisateurs et sérialisation.
    <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="https://github.com/TalebMaham/gestion">Depot d'une application de Gestion</a>
    <a class="btn btn-outline-secondary" href="/portfolio/experience/2">L'entreprise Cash flow positif</a>
  </div>
  
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
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
    <a class="btn btn-outline-secondary" href="/portfolio/experience/1">Largement utilisé chez E-thik</a>
  </div>
  
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
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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
  