// src/app/project-details/project-details-datas.ts
import { Project } from '../project.component';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Gestion de Stock",
    description: `
## Présentation du projet
SIPASTOCK est une application web conçue pour la société SIPA, spécialisée dans la fabrication de pâtes alimentaires. Le but était de centraliser la gestion des stocks pour améliorer la traçabilité, réduire le gaspillage et optimiser la logistique interne.

## Informations sur le projet

<table style="width: 100%; border-collapse: collapse; margin-top: 1em;">
  <tbody>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Nom du client</th>
      <td style="border: 1px solid #ccc; padding: 8px;">SIPA</td>
    </tr>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Secteur</th>
      <td style="border: 1px solid #ccc; padding: 8px;">Agroalimentaire</td>
    </tr>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Lieu</th>
      <td style="border: 1px solid #ccc; padding: 8px;">Mauritanie</td>
    </tr>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Durée</th>
      <td style="border: 1px solid #ccc; padding: 8px;">3 mois</td>
    </tr>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Technos utilisées</th>
      <td style="border: 1px solid #ccc; padding: 8px;">Angular, Flask, JSON</td>
    </tr>
  </tbody>
</table>

## Objectifs
- Centraliser les mouvements de stock
- Suivre les entrées/sorties en temps réel
- Automatiser les calculs de besoins
- Produire des indicateurs pour les responsables

## Contexte, enjeux, risques

Avant SIPASTOCK, SIPA utilisait des fichiers papier/Excel. Cela provoquait des pertes importantes, un manque de visibilité et des erreurs de livraison. Le principal enjeu était d’intégrer l’outil sans perturber l’activité. Les risques concernaient la formation, l’acceptation du changement et l’interopérabilité.

<div style="background-color:#f8f9fa; padding:10px; border-left: 4px solid #0d6efd;">
<b>Fait marquant :</b> Les pertes ont été réduites de 35% dans les 2 premiers mois d'utilisation.
</div>

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDRpaTVobDVvNXYydWJwdG12bnQ3cHlweW1pNDQ5YzRrdWEwdWJqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WUUt2ujWlssvUenOuf/giphy.gif"
     alt="Illustration animée"
     style="width: 300px; display: block; margin: 1em auto;">

## Étapes réalisées
<ol>
<li>Analyse des besoins et échanges terrain</li>
<li>Conception de l’architecture (Angular + Flask)</li>
<li>Développement complet avec gestion de fichiers JSON</li>
<li>Tests fonctionnels et itératifs avec les utilisateurs</li>
<li>Déploiement en ligne</li>
<li>Support et maintenance</li>
</ol>

## Acteurs et interactions

<table style="width: 100%; border-collapse: collapse; margin-top: 1em;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Rôle</th>
      <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Personne</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">Développement</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Moi-même</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">Référent métier</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Responsable de production</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">Utilisateurs finaux</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Magasiniers</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">Validation technique</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Direction technique</td>
    </tr>
  </tbody>
</table>

## Résultats obtenus
- Réduction mesurée du gaspillage
- Gain de temps pour les équipes
- Données exploitables pour les décisions
- Amélioration de la planification de production

## Lendemains du projet
Le projet est en production. Des évolutions sont prévues, comme :
- Intégration de la logistique sortante
- Prédiction de stock via apprentissage machine
- Génération automatique de rapports PDF

## Mon regard critique
Ce projet m’a permis de développer un outil utile, stable et aligné avec les vrais besoins d’une PME. Il m’a aussi appris à travailler avec des profils non-techniques, à écouter, à simplifier, et à livrer de la valeur concrète.
`,
    context: "",
    image: "/assets/images/projets/elmedine.png",
    technologies: ["HTML", "CSS", "JavaScript", "Angular", "Bootstrap"],
    etat: "Terminé",
    codeLink: "https://github.com/TalebMaham/medine",
    productionLink: "https://chri2.com/medine"
  },
  {
    id: 2,
    title: 'Monnayeur',
    description: `
  ## 🎯 Monnayeur – Simulation complète MDB
  
  Créer un **monnayeur** n’est pas seulement une affaire d’électronique : c’est une leçon de rigueur, de conception modulaire, d’architecture distribuée et de communication bas-niveau. Ce projet m’a permis de croiser le monde matériel avec les logiques logicielles complexes.
  
  ---
  
  ### 🧾 Présentation / Définition du projet
  Il s'agit de la **conception et simulation logicielle d’un monnayeur MDB** (Multi-Drop Bus), utilisé dans les distributeurs automatiques. L’objectif est de reproduire le comportement d’un monnayeur réel (acceptation, reconnaissance, routage, dispense) via des composants logiciels en Python.
  
  ---
  
  ### 🎯 Objectifs – Contexte – Enjeu – Risques
  - **Objectifs** : comprendre en profondeur les systèmes embarqués orientés transactions monétaires, et reproduire intégralement un système fonctionnel sans matériel.
  - **Contexte** : réalisé dans le cadre d’un laboratoire personnel en Mauritanie pour développer des compétences locales en électronique et automation.
  - **Enjeux** : communication protocolaire fiable, gestion d’états temps réel, respect strict du protocole MDB.
  - **Risques** : erreurs de logique asynchrone, complexité croissante, isolement technique.
  
  ---
  
  ### 🔨 Étapes (Ce que j’ai fait)
  - Design modulaire : composants comme \`CoinRecognizer\`, \`TubeSensor\`, \`Dispenser\`.
  - Simulation des trames d’échange en hexadécimal selon les standards MDB.
  - Communication entre simulateur "Master" et périphérique "BlueBox".
  - Gestion des capteurs, des niveaux de tubes et du système de dispense.
  
  ---
  
  ### 👥 Acteurs (interactions)
  - Projet solo dans sa conception, mais enrichi par des **échanges avec des passionnés open-source** sur GitHub et des forums techniques.
  - Documentation et démonstrations partagées avec la communauté locale TechLab Mauritanie.
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-primary" href="portfolio/experience/1">Entreprise : TechLab Mauritanie</a>
  </div>
  
  ---
  
  ### ✅ Résultats
  - **Pour moi** : montée en compétence sur les systèmes embarqués, architecture modulaire, gestion protocolaire.
  - **Pour l’écosystème local** : preuve qu’un projet hardware avancé peut être simulé sans matériel coûteux.
  - Valorisation du projet dans mon portfolio, utilisé comme base d’exploration Arduino.
  
  ---
  
  ### 🔄 Lendemains du projet
  - **Immédiat** : préparation à la phase physique avec Arduino et capteurs réels.
  - **Aujourd’hui** : sert de socle pédagogique pour introduire les protocoles industriels dans mon environnement d’apprentissage.
  - **À distance** : pourra devenir un module open-source pour la formation technique locale.
  
  ---
  
  ### 👁️ Mon regard critique
  Ce projet m’a appris à **penser système**, à documenter chaque étape, à **modéliser des comportements réels sans matériel**, et à ne jamais sous-estimer la complexité d’un protocole. Ma plus-value réside dans ma capacité à simplifier un système industriel et à en simuler chaque détail.
  
  ---
  
  ### ⚙️ Compétences techniques mobilisées
  - 🧠 **Simulation hardware/software** : Python (simulateur complet MDB)
  - 🧩 **Architecture modulaire** : composants indépendants et réutilisables
  - 🔌 **Communication protocolaire** : échanges via buffers hexadécimaux
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/flask">Flask</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/python">Python</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/git">Git</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills développées
  - 🔍 **Esprit analytique** : modélisation et découpage d’un système complexe
  - 🤝 **Autonomie et persévérance** : avancer sans support matériel ni documentation native claire
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/1">Parler en public</a>
    <a class="btn btn-outline-success" href="portfolio/soft-skill/2">Collaborer</a>
  </div>
  `,
    context: "",
    image: '/assets/images/projets/elmedine.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap'],
    etat: 'Terminé',
    codeLink: 'https://github.com/TalebMaham/medine',
    productionLink: 'https://chri2.com/medine'
  },

  {
    id: 3,
    title: "Casier D2C",
    description: `
  ## 📦 Casier D2C – Système de distribution connecté
  
  Le **Casier D2C** est une solution matérielle/logicielle de casiers connectés à destination du commerce direct au consommateur (Direct-to-Consumer).
  
  ---
  
  ### 🔎 Présentation
  Développement d’un **système intelligent de contrôle de casiers**, avec ouverture sécurisée, suivi des états (porte, LED), gestion des stocks.
  
  ---
  
  ### 🎯 Objectifs – Contexte – Enjeux – Risques
  - **Objectifs** : automatiser la distribution de produits physiques via casiers motorisés.
  - **Contexte** : réponse à un besoin terrain dans le retail et la logistique locale.
  - **Enjeux** : fiabilité matérielle, tolérance aux pannes, sécurité.
  - **Risques** : problème d’électronique sur site, gestion des erreurs asynchrones.
  
  ---
  
  ### 🔨 Étapes
  - Définition du mapping entre casiers et ports GPIO.
  - Contrôle électronique des ouvertures via Python + Flask.
  - Simulation logicielle et intégration physique sur Raspberry Pi.
  
  ---
  
  ### 👥 Acteurs
  - Collaboration avec un électricien local pour l’assemblage matériel.
  - Feedback terrain avec l’équipe de TechLab Mauritanie.
  
  ---
  
  ### ✅ Résultats
  - Un système fonctionnel utilisé dans des tests réels de distribution locale.
  - Industrialisation envisagée pour d’autres cas d’usage (livraison, collecte...).
  
  ---
  
  ### 🔄 Lendemains
  - Intégration avec un dashboard Angular pour pilotage à distance.
  - Extension prévue vers des casiers réfrigérés.
  
  ---
  
  ### 👁️ Mon regard critique
  Projet complexe qui m’a obligé à jongler entre software, électronique, logistique et UX. Ce projet a confirmé ma capacité à **concevoir une solution physique + API + interface web**.
  
  ---
  
  ### ⚙️ Compétences techniques
  Python · Flask · GPIO · Docker · Architecture REST
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/python">Python</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/flask">Flask</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills
  - 🧠 Analyse système
  - 🧰 Résolution de problème matériel
  - 🔁 Adaptabilité
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/4">Résoudre des problèmes</a>
  </div>
  `,
    context: "",
    image: "/assets/images/projets/casier-d2c.png",
    technologies: ["Python", "Flask", "GPIO", "Docker"],
    etat: "Terminé",
    codeLink: "https://github.com/TalebMaham/casier-d2c",
    productionLink: "https://chri2.com/casier"
  },

  {
    id: 4,
    title: "Blood Bank",
    description: `
  ## 🩸 Blood Bank – Gestion intelligente des dons de sang
  
  Application web/mobile permettant de **suivre, planifier et optimiser les dons de sang**, en assurant traçabilité et mise en relation entre donneurs et centres.
  
  ---
  
  ### 🔎 Présentation
  Conception d’un système de gestion des stocks de sang et de communication proactive avec les donneurs selon les besoins des hôpitaux.
  
  ---
  
  ### 🎯 Objectifs – Contexte – Enjeux – Risques
  - **Objectifs** : fluidifier la logistique autour du don de sang.
  - **Contexte** : manque de coordination dans les campagnes locales.
  - **Enjeux** : fiabilité des notifications, confidentialité des données.
  - **Risques** : échec d’adoption sans interface claire ni valeur directe.
  
  ---
  
  ### 🔨 Étapes
  - Base de données des groupes sanguins et profils de donneurs.
  - Interface front Angular + backend Django REST.
  - Planification des notifications en temps réel.
  
  ---
  
  ### 👥 Acteurs
  - Échanges avec des professionnels de santé et gestionnaires d’associations.
  - Tests utilisateurs avec des volontaires.
  
  ---
  
  ### ✅ Résultats
  - Application fonctionnelle testée dans un cadre de simulation.
  - Base réutilisable pour d'autres projets de gestion médicale.
  
  ---
  
  ### 🔄 Lendemains
  - Prévision d’un pilote avec une clinique locale.
  - Ajout de la géolocalisation des centres.
  
  ---
  
  ### 👁️ Mon regard critique
  Expérience très humaine. J’ai pu concilier sens, utilité sociale et rigueur technique. Ce projet m’a formé à la gestion d’un cycle de vie complet d’un produit.
  
  ---
  
  ### ⚙️ Compétences techniques
  Django REST · Angular · PostgreSQL · Authentification sécurisée
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/django">Django</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/angular">Angular</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills
  - ❤️ Empathie projet social
  - 🧭 Gestion de projet complet
  - 🧠 Analyse métier
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/2">Collaborer</a>
  </div>
  `,
    context: "",
    image: "/assets/images/projets/blood-bank.png",
    technologies: ["Django", "Angular", "PostgreSQL"],
    etat: "Terminé",
    codeLink: "https://github.com/TalebMaham/blood-bank",
    productionLink: "https://chri2.com/blood-bank"
  }, 

  {
    id: 5,
    title: "Moopsa",
    description: `
  ## 📚 Moopsa – Plateforme éducative interactive
  
  **Moopsa** est une plateforme en ligne pour suivre et renforcer les acquis en mathématiques et physique à travers des mini-cours et des quiz adaptatifs.
  
  ---
  
  ### 🔎 Présentation
  Projet pédagogique personnel destiné à accompagner des élèves de lycée dans la compréhension de concepts scientifiques de base.
  
  ---
  
  ### 🎯 Objectifs – Contexte – Enjeux – Risques
  - **Objectifs** : rendre l’apprentissage interactif, ludique et progressif.
  - **Contexte** : élèves en difficulté dans les matières scientifiques.
  - **Enjeux** : qualité des contenus, UX fluide, adaptation au niveau réel.
  - **Risques** : décrochage utilisateur, manque d’interaction.
  
  ---
  
  ### 🔨 Étapes
  - Création des contenus (leçons, exercices).
  - Développement d’une interface Angular + back Flask.
  - Système de progression par badge + correction automatique.
  
  ---
  
  ### 👥 Acteurs
  - Recueil de besoins auprès d’élèves suivis en cours particuliers.
  - Tests auprès d’un petit groupe volontaire.
  
  ---
  
  ### ✅ Résultats
  - 1ère version fonctionnelle utilisée dans des sessions d’accompagnement.
  - Base de code modulaire pour extension à d’autres matières.
  
  ---
  
  ### 🔄 Lendemains
  - Prévu : ajout de profils enseignants + statistiques détaillées.
  - Passage futur en PWA.
  
  ---
  
  ### 👁️ Mon regard critique
  Ce projet est **un pont entre mes compétences techniques et ma vocation pédagogique**. Il m’a permis de créer un outil utile, simple, vivant.
  
  ---
  
  ### ⚙️ Compétences techniques
  Flask · Angular · Auth · LocalStorage · Responsive design
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/angular">Angular</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/flask">Flask</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills
  - 🎓 Sens de la pédagogie
  - 🔄 Adaptabilité
  - 🛠 Créativité
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/3">Diriger</a>
  </div>
  `,
    context: "",
    image: "/assets/images/projets/moopsa.png",
    technologies: ["Angular", "Flask"],
    etat: "En cours",
    codeLink: "https://github.com/TalebMaham/moopsa",
    productionLink: "https://chri2.com/moopsa"
  },

  {
    id: 6,
    title: "Portfolio",
    description: `
  ## 🌐 Portfolio personnel – Vitrine de compétences
  
  Développement d’un **portfolio interactif** pour présenter mes projets, compétences, expériences et soft skills de manière claire et professionnelle.
  
  ---
  
  ### 🔎 Présentation
  Site responsive Angular connecté à des données dynamiques, structuré par sections interactives (projets, soft skills, expériences...).
  
  ---
  
  ### 🎯 Objectifs – Contexte – Enjeux – Risques
  - **Objectifs** : valoriser mes réalisations et montrer mes compétences réelles.
  - **Contexte** : dossier de certification et recherche d’opportunités professionnelles.
  - **Enjeux** : lisibilité, expérience utilisateur, cohérence visuelle.
  - **Risques** : surcharge, design confus, contenu non pertinent.
  
  ---
  
  ### 🔨 Étapes
  - Maquettage sur Figma.
  - Développement Angular + SCSS + animations.
  - Intégration dynamique des données JSON et Markdown.
  
  ---
  
  ### 👥 Acteurs
  - Feedbacks reçus d’amis développeurs et de formateurs ISCOD.
  - Corrections itératives selon les retours de jury.
  
  ---
  
  ### ✅ Résultats
  - Portfolio en ligne consulté par recruteurs.
  - Outil de support pour entretiens et candidatures.
  
  ---
  
  ### 🔄 Lendemains
  - Ajout d’un système de blog pour documenter mes TPs et apprentissages.
  - Passage en version multilingue.
  
  ---
  
  ### 👁️ Mon regard critique
  J’ai appris à me **présenter clairement comme développeur**, à soigner le détail, l’accessibilité, et à rendre mes compétences visibles et vérifiables.
  
  ---
  
  ### ⚙️ Compétences techniques
  Angular · SCSS · TypeScript · Markdown · GitHub Pages
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/angular">Angular</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/typescript">TypeScript</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills
  - 🎯 Autonomie
  - 🗂 Organisation
  - 👁️ Esprit de synthèse
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/5">Gérer son temps</a>
  </div>
  `,
    context: "",
    image: "/assets/images/projets/portfolio.png",
    technologies: ["Angular", "SCSS", "TypeScript"],
    etat: "Terminé",
    codeLink: "https://github.com/TalebMaham/portfolio",
    productionLink: "https://chri2.com"
  }
  
  
  
  
  


  
  
];