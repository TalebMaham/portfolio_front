// src/app/project/project.data.ts
import { Project } from './project.component';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Gestion de stock',
    description: "SIPASTOCK est une application web créée pour l’entreprise SIPA, spécialisée dans les pâtes. Elle permet de centraliser la gestion des stocks, remplacer les fichiers éparpillés, suivre les mouvements en temps réel et réduire le gaspillage. L’outil simplifie le travail des équipes terrain avec une interface claire et pratique.",
    image: '/assets/images/projets/elmedine.png',
    context: "L’entreprise SIPA avait besoin d’un outil pour mieux gérer ses stocks de pâtes. Avant, les données étaient dispersées sur plusieurs fichiers, souvent gérées à la main. Il fallait une solution simple, centralisée, adaptée aux équipes terrain.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', "Flask" , "Django REST"],
    etat: 'En cours',
    codeLink: 'https://github.com/TalebMaham/medine',
    productionLink: 'https://chri2.com/medine'
  },
  {
    id: 2,
    title: 'Monnayeur',
    description: "Projet réalisé pour e-thik afin d’intégrer un vrai système de paiement en pièces dans leurs bornes (casier, micro-ondes, etc.). Il a fallu gérer la communication bas niveau avec le matériel, en temps réel, sans erreur. Le défi principal : connecter le logiciel au monde physique de façon fiable et robuste.",
    image: '/assets/images/projets/cashier.png',
    context: "e-thik développe des bornes de distribution connectées. Pour y intégrer un paiement en pièces, il fallait piloter du matériel réel via logiciel, dans un environnement industriel. L’enjeu était d’avoir un système fiable, précis, et capable de réagir en temps réel.",
    technologies: ['C', 'React', 'Falsk', 'Django REST'],
    etat: 'Terminé',
  },
  {
    id: 3,
    title: 'Casiers',
    description: "Développement d’un système complet pour piloter des casiers physiques à distance : ouverture sécurisée, suivi des LED, contrôle des portes et gestion de stock en temps réel. Le système s’intègre aux bornes connectées de e-thik et communique avec les autres modules (écran, paiement, micro-onde...).",
    image: '/assets/images/projets/casier_d2c.png',
    context: "e-thik conçoit des bornes de distribution multi-fonctions. Le besoin était de rendre chaque casier autonome mais connecté, afin d’assurer une distribution fluide, sans contact, et contrôlée à distance. Le système devait être fiable, rapide et adapté aux contraintes du terrain.",
    technologies: ['Python', 'Django REST', 'Flask'],
    etat: 'Prototype',
  },

  {
    id: 4,
    title: 'Boold Bank',
    description: "Application web de gestion des dons de sang, permettant de suivre les donneurs, les stocks par groupe sanguin et les besoins urgents. Elle centralise toutes les données utiles et aide les centres de santé à s’organiser efficacement, sans outil compliqué.",
    image: '/assets/images/projets/blood-bank.png',
    context: "Dans les centres de santé, le suivi des dons de sang se faisait souvent de manière dispersée ou manuelle. Il fallait un outil clair, accessible et rapide à utiliser pour éviter les pertes de temps ou les ruptures critiques. L’application a été pensée pour répondre à ce besoin terrain.",
    technologies: ['HTML', 'CSS', 'JavaScript', "Flask" , "Django REST"],
    etat: 'En cours',
    codeLink: 'https://github.com/TalebMaham/poche',
    productionLink: 'https://chri2.com/poche'
  },
  {
    id: 5,
    title: 'MopsaIDE',
    description: "Développement d’un connecteur entre Mopsa et plusieurs IDE pour permettre l’analyse statique de code directement dans l’environnement de développement. Grâce à LSP et MagpieBridge, les développeurs peuvent voir les erreurs et alertes en temps réel, sans quitter leur éditeur.",
    image: '/assets/images/projets/mopsa.png',
    context: "Mopsa, à l’origine, s’utilise en ligne de commande, ce qui limite son adoption. Le but du projet était de le rendre plus accessible en l’intégrant à des outils comme VS Code ou Eclipse, afin d’améliorer l’expérience développeur et d’encourager son usage dans des contextes réels de développement.",
    technologies: ['Java', 'Eclipse', 'Docker'],
    etat: 'Terminé',
  },
  {
    id: 6,
    title: 'Portfolio',
    description: "Développement d’un portfolio web interactif pour présenter mes projets, compétences techniques et soft skills. Le site est clair, structuré et rapide à explorer, pensé pour donner une vue d’ensemble complète sans perdre de temps.",
    image: '/assets/images/projets/portfolio2.png',
    context: "J’avais besoin d’un espace personnel pour centraliser tout ce que j’ai réalisé, et montrer concrètement ce que je sais faire. Le but était de faciliter la lecture pour les recruteurs ou partenaires, en allant droit au but, avec une interface propre et accessible.",
    technologies: ['Angular', 'Docker', 'VPS'],
    etat: 'Terminé',
  }
];
