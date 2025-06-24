// src/app/project/project.data.ts
import { Project } from './project.component';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Gestion de stock',
    description: "Une application conçue pour gérer efficacement le stock d’une entreprise en temps réel. Elle offre un suivi précis des entrées et sorties de produits, alerte automatiquement en cas de seuil critique, et génère des rapports détaillés sur les mouvements et tendances. Grâce à son interface intuitive et à ses fonctionnalités avancées — historique des opérations, notifications intelligentes, gestion multi-utilisateurs — elle s’adapte facilement aux besoins des PME. Conçue pour être modulaire, .",
    image: '/assets/images/projets/elmedine.png',
    context: "Ce projet a été réalisé pour aider une usine...",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', "Flask" , "Django REST"],
    etat: 'En cours',
    codeLink: 'https://github.com/TalebMaham/medine',
    productionLink: 'https://chri2.com/medine'
  },
  {
    id: 2,
    title: 'Monnayeur',
    description: "Le projet de monnayeur pour E-thik vise à moderniser...",
    image: '/assets/images/projets/cashier.png',
    context: "E-thik, une société spécialisée dans la distribution automatique...",
    technologies: ['React', 'Falsk', 'Django REST'],
    etat: 'Terminé',
  },
  {
    id: 3,
    title: 'Casier D2C',
    description: "Le projet des casiers D2C a été conçu pour E-thik...",
    image: '/assets/images/projets/casier_d2c.png',
    context: "Face au retard de livraison des casiers physiques...",
    technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
    etat: 'Prototype',
  },

  {
    id: 4,
    title: 'Gestion de stock',
    description: "Une application conçue pour gérer efficacement le stock...",
    image: '/assets/images/projets/elmedine.png',
    context: "Ce projet a été réalisé pour aider une usine...",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', "Flask" , "Django REST"],
    etat: 'En cours',
    codeLink: 'https://github.com/TalebMaham/medine',
    productionLink: 'https://chri2.com/medine'
  },
  {
    id: 5,
    title: 'Monnayeur',
    description: "Le projet de monnayeur pour E-thik vise à moderniser...",
    image: '/assets/images/projets/cashier.png',
    context: "E-thik, une société spécialisée dans la distribution automatique...",
    technologies: ['React', 'Falsk', 'Django REST'],
    etat: 'Terminé',
  },
  {
    id: 6,
    title: 'Casier D2C',
    description: "Le projet des casiers D2C a été conçu pour E-thik...",
    image: '/assets/images/projets/casier_d2c.png',
    context: "Face au retard de livraison des casiers physiques...",
    technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
    etat: 'Prototype',
  }
];
