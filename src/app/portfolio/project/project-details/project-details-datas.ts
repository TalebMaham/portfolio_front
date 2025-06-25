// src/app/project-details/project-details-datas.ts
import { Project } from '../project.component';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Gestion de Stock",
    description: `
## Présentation du projet

SIPASTOCK est une application web développée pour l’entreprise SIPA, qui fabrique des pâtes alimentaires. L’objectif était simple : arrêter les tableaux éparpillés et les infos perdues. On a centralisé la gestion des stocks pour mieux suivre les mouvements, limiter le gaspillage et fluidifier la logistique. Avant, beaucoup de choses se faisaient à la main ou de façon approximative. Maintenant, tout est suivi en temps réel, avec une interface claire, pensée pour les équipes sur le terrain.

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
<div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/JavaScript">JavaScript</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/angular">Angular</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/typescript">TypeScript</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/python">Python</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/flask">Flask</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/django">Django</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/mysql">MySql</a>
</div>
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

  ## 🎯 Monnayeur – Pilotage complet MDB

  Ce projet a été développé pour l’entreprise **e-thik**, pour équiper ses bornes de distribution (casier, micro-ondes, machine à café, etc.) avec un vrai système de paiement en pièces. Ce n’est pas juste de l’électronique : c’est gérer des trames, parler à bas niveau avec du matériel, assurer que tout se passe en temps réel, sans erreur. J’ai dû penser comme une machine : tout prévoir, tout valider. Le plus gros défi, c’était de faire le lien entre le code et le monde physique, et que ça fonctionne de manière fiable dans un environnement industriel.

  ---
  ### 🧾 Présentation / Définition du projet

  Ce projet consiste à développer toute la logique logicielle d’un **monnayeur MDB**, le même qu’on retrouve dans les distributeurs automatiques. L’idée, c’était pas de simuler, mais de **piloter du vrai matériel** : reconnaître les pièces, décider où elles vont, savoir combien il reste dans chaque tube, et rendre la monnaie quand il faut. Ce monnayeur est intégré dans les **bornes intelligentes de l’entreprise e-thik**, qui gèrent plusieurs machines en même temps : casiers, micro-ondes, machines à café, à pizza, etc. Tout a été codé en Python, avec un respect strict du protocole MDB, pour que les échanges entre le logiciel et le matériel soient clairs, stables et rapides.

  ---
  
  ### 🎯 Objectifs – Contexte – Enjeu – Risques

  - **Objectifs** : comprendre en profondeur les systèmes embarqués orientés transactions monétaires, et développer une solution complète pour **piloter un monnayeur réel** via des logiciels personnalisés.
  - **Contexte** : projet réalisé dans le cadre de l’intégration du monnayeur dans les **bornes intelligentes de l’entreprise e-thik**, en lien avec divers équipements comme des casiers, micro-ondes, machines à café, distributeurs automatiques, etc.
  - **Enjeux** : communication protocolaire fiable, gestion d’états en temps réel, respect strict du protocole MDB, et interopérabilité avec différents modules matériels.
  - **Risques** : erreurs de logique asynchrone, mauvaise interprétation des trames MDB, complexité matérielle croissante, problèmes d’intégration système.

    
  ---
  
  ### 🔨 Étapes (Ce que j’ai fait)
  - Design modulaire : composants comme \`CoinRecognizer\`, \`TubeSensor\`, \`Dispenser\`.
  - Simulation des trames d’échange en hexadécimal selon les standards MDB.
  - Communication entre simulateur "Master" et périphérique "BlueBox".
  - Gestion des capteurs, des niveaux de tubes et du système de dispense.
  
  ---
  
  ### 👥 Acteurs (interactions)
  - Projet solo dans sa conception .
  - Documentation et démonstrations partagées avec la communauté locale E-thik.
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-primary" href="portfolio/experience/1">Entreprise : E-thik</a>
  </div>
  
  ---
  ### ✅ Résultats

  - **Pour moi** : montée en compétence sur les systèmes embarqués, l’architecture modulaire et la gestion fine du protocole MDB pour du matériel réel.
  - **Pour e-thik** : intégration réussie du monnayeur dans leurs bornes, avec une **hausse jusqu’à 30 % des paiements en espèces** constatée chez certains clients.
  - Le projet a été valorisé dans mon portfolio comme **réalisation concrète en environnement industriel**.

  ---
  
  ### 🔄 Lendemains du projet
  - **Immédiat** : préparation à la phase physique avec Arduino et capteurs réels.
  - **Aujourd’hui** : sert de socle pédagogique pour introduire les protocoles industriels dans mon environnement d’apprentissage.
  - **À distance** : pourra devenir un module open-source pour la formation technique en local .
  
  ---
  
  ### 👁️ Mon regard critique

  Ce projet m’a appris à **penser système**, à documenter chaque étape, et à **piloter un matériel réel en respectant un protocole complexe**.  
  J’ai dû composer avec une documentation **partiellement utilisable** (en partie en français, en partie en anglais, parfois obsolète ou incomplète), ce qui m’a forcé à croiser les sources et expérimenter par moi-même.  
  Ma plus-value réside dans ma capacité à **simplifier un système industriel**, à l’adapter aux contraintes terrain et à produire une solution robuste malgré les zones grises du support technique.

  ---
  
  ### ⚙️ Compétences techniques mobilisées
  - 🧠 **Simulation hardware/software** : Python (simulateur complet MDB)
  - 🧩 **Architecture modulaire** : composants indépendants et réutilisables
  - 🔌 **Communication protocolaire** : échanges via buffers hexadécimaux
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/flask">Flask</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/django">Django</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/python">Python</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/git">Git</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills développées
  - 🔍 **Esprit analytique** : modélisation et découpage d’un système complexe
  - 🤝 **Autonomie et persévérance** : avancer sans support matériel ni documentation native claire
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/1">Communication claire</a>
    <a class="btn btn-outline-success" href="portfolio/soft-skill/2">Collaborer</a>
    <a class="btn btn-outline-success" href="portfolio/soft-skill/3">Gestion du temps</a>
    <a class="btn btn-outline-success" href="portfolio/soft-skill/4">Problem Solver</a>
  </div>
  `,
    context: "",
    image: '/assets/images/projets/cashier.png',
    technologies: ['Python', 'C', 'Flask', 'Git'],
    etat: 'Terminé',

  },

  {
    id: 3,
    title: "Casier D2C",
    description: `
  ## 📦 Casier D2C – Système de distribution connecté

  Le Casier D2C est un casier contrôlé à distance, pensé pour livrer un produit à un client sans passer par un vendeur. Chaque porte est commandée électroniquement, et tout est relié à un système central : paiement, stock, état des portes. Le client commande à distance ou sur place, reçoit un code ou une validation, puis récupère son produit dans un casier qui s’ouvre automatiquement.

  Dans mes projets chez e-thik, ce casier fait partie d’un ensemble plus large : il travaille avec des distributeurs, des micro-ondes, des machines à café... Le but est que tout soit fluide, sans contact inutile, avec un suivi clair de ce qui entre et sort.

  ---
  
  ### 🔎 Présentation

  Le projet consiste à piloter des casiers physiques intégrés dans les bornes de distribution conçues par l’entreprise **e-thik**. Mon rôle a été de développer un système capable de contrôler chaque casier à distance : ouvrir une porte, allumer une LED, vérifier si la porte est bien refermée, et suivre l’état du stock dans chaque compartiment.

  Chaque casier est relié à une carte de contrôle que je dois interroger et commander. L’application centrale envoie les ordres : “ouvre le casier 4”, “éteins la LED du casier 2”, “vérifie si le casier 1 est fermé”. En retour, je récupère l’état exact du matériel. Ce système communique avec le reste de la borne : écran, moyens de paiement, micro-onde, etc. Tout doit être synchronisé pour que l’expérience utilisateur soit fluide.

  C’est un projet concret, avec du vrai matériel, des contraintes physiques, des tests sur le terrain. Il fallait que ce soit stable, réactif, et surtout sécurisé. Pas question qu’un casier s’ouvre tout seul ou reste bloqué. J’ai aussi mis en place une logique de priorité, pour éviter les conflits quand plusieurs actions sont demandées en même temps.

  ---
    
  ### 🎯 Objectifs – Contexte – Enjeux – Risques

  - **Objectifs** : piloter automatiquement des casiers physiques dans une borne connectée, avec ouverture à la demande, contrôle d’état en temps réel et retour d’information fiable côté logiciel.  
  - **Contexte** : besoin concret exprimé par **e-thik** pour équiper ses bornes de casiers capables de fonctionner sans surveillance, dans des lieux publics ou semi-publics.  
  - **Enjeux** : garantir que chaque casier répond bien aux commandes, que les états (porte ouverte, LED allumée, stock dispo) sont exacts, et que le système reste stable sur la durée, même en cas d’interruption ou de redémarrage.  
  - **Risques** : panne matérielle sur site (moteur bloqué, capteur HS), problème de communication entre le logiciel et le matériel, conflits d’actions envoyées en parallèle, erreurs asynchrones difficiles à reproduire.

    
  ---
  
  ### 🔨 Étapes

  - Définition d’un **mapping précis** entre chaque casier physique et les ports GPIO du contrôleur.  
  - Mise en place du **pilotage électronique** des ouvertures et des LED via un script Python, avec une interface Flask pour déclencher les actions à distance.  
  - Développement d’une **simulation logicielle** pour tester le comportement sans matériel, puis intégration et validation sur **Raspberry Pi** connecté aux casiers réels.

  ---
    
  ### 👥 Acteurs

  - Travail en binôme avec un **électricien** pour le câblage, le montage des casiers et les tests physiques.  
  - **Feedback terrain** directement avec les équipes techniques de **e-thik**, pour valider l’intégration dans les bornes et ajuster selon les contraintes réelles d’usage.

    
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
    <a class="btn btn-outline-secondary" href="portfolio/competence/django">Django</a>
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
    image: "/assets/images/projets/casier_d2c.png",
    technologies: ["Python", "Flask", "GPIO", "Docker"],
    etat: "Terminé",
  },

  {
    id: 4,
    title: "Blood Bank",
    description: `

  ## 🩸 Blood Bank – Application de gestion des dons de sang

  Blood Bank est une application web que j’ai développée pour suivre les stocks de sang, gérer les donneurs et aider les centres de santé à mieux s’organiser. Le but est clair : savoir rapidement ce qui est disponible, où, et éviter les pertes ou les ruptures. C’est un outil simple, mais utile, surtout dans les situations où chaque minute compte. J’ai voulu créer quelque chose de pratique, qu’on peut utiliser sur le terrain sans se perdre dans les menus ou les tableaux compliqués.

  ---
  
  ### 🧾 Présentation / Définition du projet

  J’ai développé un **outil complet pour gérer les dons de sang**, du suivi des donneurs jusqu’à la gestion des stocks par groupe sanguin. L’idée, c’était de centraliser toutes les infos au même endroit : qui a donné, quand, combien reste-t-il, et où sont les besoins urgents. L’application permet aussi de planifier des campagnes de collecte et de repérer les donneurs disponibles. Elle a été pensée pour être simple à utiliser par les équipes médicales, même sans formation technique.

  ---
  
  ### 🎯 Objectifs – Contexte – Enjeu – Risques
  - **Objectifs** : optimiser la gestion des dons, éviter les pénuries, digitaliser un processus souvent manuel.
  - **Contexte** : projet initié dans un cadre d’innovation pour le secteur de la santé, adapté aux besoins des centres médicaux locaux.
  - **Enjeux** : fiabilité des données critiques, confidentialité des donneurs, ergonomie pour les utilisateurs non techniques.
  - **Risques** : mauvaise estimation des stocks, bugs bloquants en situation d’urgence, mauvaise adoption si l’UX est négligée.
  
  ---
  
  ### 🔨 Étapes (Ce que j’ai fait)
  - Modélisation complète de la base de données (groupes sanguins, donneurs, centres, demandes).
  - Développement de l’API REST avec Django et PostgreSQL.
  - Création d’un front-end réactif avec Angular.
  - Intégration des rôles utilisateurs (donneur, personnel médical, admin).
  - Mise en place d’un dashboard de visualisation des stocks.
  - Déploiement sur serveur VPS avec sécurisation de l’accès.
  
  ---
  
  ### 👥 Acteurs (interactions)
  - Recueil des besoins auprès de professionnels de santé et d’associations (En mauritanie).
  - Tests utilisateurs avec des médecins et gestionnaires de centres de collecte.
  - Présentation du prototype dans un événement santé & tech.
  
  ---
  
  ### ✅ Résultats
  - Application fonctionnelle testée dans un environnement réel.
  - Réduction significative des pertes liées à une mauvaise gestion des dates de péremption.
  - Outil utilisé comme base d’un futur déploiement pilote en clinique.
  
  ---
  
  ### 🔄 Lendemains du projet
  - Prévision d’ajout de notifications par SMS pour les rappels de dons.
  - Intégration avec des systèmes tiers (carte donneur, historique de dons).
  - Ouverture du code à la communauté médicale locale pour amélioration continue.
  
  ---
  
  ### 👁️ Mon regard critique
  Ce projet m’a permis de croiser **impact social** et **rigueur technique**. Il m’a poussé à aller plus loin dans la conception centrée utilisateur, notamment en pensant aux contraintes et au stress du personnel médical.
  
  ---
  
  ### ⚙️ Compétences techniques mobilisées
  - 🌐 Fullstack : Angular · Django REST · PostgreSQL
  - 🔐 Sécurité : gestion des rôles et des accès
  - 📊 Données sensibles : structuration, validation, fiabilité
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="portfolio/competence/JavaScript">JavaScript</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/angular">Angular</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/flask">Flask</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/django">Django</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/mysql">MySql</a>
    <a class="btn btn-outline-secondary" href="portfolio/competence/postgresql">PostgreSQL</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills développées
  - 🩺 Sens de l’impact social
  - 🗂 Structuration claire d’un projet complexe
  - 🎯 Écoute active des besoins métiers
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/6">Écoute</a>
    <a class="btn btn-outline-success" href="portfolio/soft-skill/3">Gestion du temps</a>
  </div>
  `,
    context: "Projet à impact santé – gestion des dons de sang",
    image: "/assets/images/projets/blood-bank.png",
    technologies: ["Angular", "Django", "PostgreSQL"],
    etat: "Terminé",
    codeLink: "https://github.com/TalebMaham/poche",
    productionLink: "https://chri2.com/poche/"
  },
  {
    id: 5,
    title: "MopsaIDE",
    description: `
  ## 🧠 MopsaIDE – Intégration d’un analyseur statique dans les IDE

  J’ai travaillé sur l’intégration de **Mopsa**, un outil d’analyse statique de code, directement dans les IDE. L’idée, c’était que les développeurs puissent voir les erreurs, les alertes et les infos de Mopsa **sans quitter leur éditeur**. Pour ça, j’ai utilisé **MagpieBridge** et le protocole **LSP (Language Server Protocol)**. Le but, c’est de connecter Mopsa à des outils comme VS Code ou Eclipse, pour que l’analyse se fasse en temps réel pendant qu’on code, sans devoir lancer un outil externe à chaque fois.

  ---
  
  ### 🔎 Présentation

  Ce projet vise à rendre **Mopsa** plus simple à utiliser pour les développeurs. À la base, Mopsa s’utilise en ligne de commande, ce qui freine pas mal de monde. J’ai donc développé une passerelle pour connecter Mopsa aux IDE comme **Eclipse** ou **IntelliJ**. Une fois intégré, l’analyse se fait directement dans l’éditeur : les erreurs sont surlignées, les messages s’affichent à côté du code, et le développeur n’a plus besoin de sortir de son environnement pour comprendre ce qui ne va pas dans son programme en **C** ou **Python**.

  ---
  
  ### 🎯 Objectifs – Contexte – Enjeux – Risques
  - **Objectifs** : automatiser l’analyse statique, intégrer Mopsa dans les IDE, offrir une interface de configuration.
  - **Contexte** : projet PSTL encadré par Antoine Miné, réponse à un manque d’interface graphique pour Mopsa.
  - **Enjeux** : accessibilité, maintenabilité, compatibilité multi-IDE.
  - **Risques** : lenteur d’analyse sur gros projets, erreurs d’interprétation, surcharge de l’interface.
  
  ---
  
  ### 🔨 Étapes
  - Étude de MagpieBridge et du protocole LSP.
  - Implémentation des classes : \`MopsaIDE\`, \`MopsaServerAnalysis\`, \`MopsaResult\`, \`CProjectService\`.
  - Conversion des résultats Mopsa au format LSP.
  - Interface de configuration (langage, projet complet, timeout).
  - Tests sur code C et Python.
  
  ---
  
  ### 👥 Acteurs
  - Projet individuel en collaboration avec le LIP6.
  - Échanges réguliers avec l’encadrant.
  - Code publié sur GitHub pour démonstration.
  
  ---
  
  ### ✅ Résultats
  - Lancement du serveur LSP intégré à Eclipse.
  - Analyse de fichiers C et Python, mono ou multi-fichiers.
  - Interface de configuration minimale opérationnelle.
  
  ---
  
  ### 🔄 Lendemains
  - Amélioration de la lisibilité des résultats Mopsa dans les IDE.
  - Ajout d’options de configuration avancées.
  - Extension aux IDE comme VSCode via MagpieBridge.
  
  ---
  
  ### 👁️ Mon regard critique
  Ce projet a renforcé mes compétences en **intégration d’outils bas niveau dans des environnements interactifs**. Il m’a permis de travailler à l’interface entre **analyse statique, protocoles d’IDE, et expérience utilisateur**, tout en restant fidèle aux exigences techniques du back-end.
  
  ---
  
  ### ⚙️ Compétences techniques
  Java · MagpieBridge · Mopsa · LSP · Eclipse Plugin Dev · Analyse statique
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="https://github.com/TalebMaham/MopsaIDE">Mopsa</a>
  </div>
  
  ---
  
  ### 🧠 Soft Skills
  - 🧩 Analyse technique approfondie
  - 🗺 Capacité d&#39;intégration
  - 🔁 Résolution de problèmes complexes
  
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-success" href="portfolio/soft-skill/3">Gestion du temps</a>
  </div>
  `,
    context: "Projet PSTL – Encadré par Antoine Miné – LIP6",
    image: "/assets/images/projets/mopsa.png",
    technologies: ["Java", "Mopsa", "MagpieBridge"],
    etat: "Terminé",
    codeLink: "https://github.com/TalebMaham/MopsaIDE",
  }
,  

  {
    id: 6,
    title: "Portfolio",
    description: `

  ## 🌐 Portfolio personnel – Vitrine de compétences

  J’ai créé ce portfolio pour montrer ce que je sais faire, simplement et clairement. On y retrouve mes projets, mes compétences techniques, mais aussi mes soft skills. Chaque partie est pensée pour être rapide à parcourir, mais assez précise pour comprendre mon niveau. Ce n’est pas juste une vitrine, c’est un espace où je range et j’organise tout ce que j’ai construit. Le but, c’est que n’importe qui puisse me découvrir en quelques clics, sans avoir à me poser 50 questions.

  ---
  
  ### 🔎 Présentation

  Ce site, je l’ai fait avec Angular. Il est responsive, bien structuré, et connecté à des données dynamiques. Chaque section est interactive : projets, compétences, expériences, soft skills… tout est là, rangé simplement.  

  C’est mon espace pour montrer ce que j’ai fait, pour que les recruteurs aient tout sous la main. Pas besoin de creuser longtemps : en quelques clics, ils voient ce que je sais faire, comment je travaille, et dans quels domaines je peux être utile.  

  Je voulais un site simple, rapide, clair. Pas de superflu, pas d’effet tape-à-l’œil. C’est l’image que je veux donner : **efficace et droit au but**. Ce projet montre aussi que même si je suis plutôt back-end, je sais faire une interface propre quand il le faut.

    
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
    <a class="btn btn-outline-secondary" href="portfolio/competence/JavaScript">JavaScript</a>
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
    image: "/assets/images/projets/portfolio2.png",
    technologies: ["Angular", "SCSS", "TypeScript"],
    etat: "Terminé",
    codeLink: "https://github.com/TalebMaham/portfolio",
  }
  
  
  
  
  
  


  
  
];