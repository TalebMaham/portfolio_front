// src/app/data/formation-data.ts
export interface Formation {
    id: number;
    titre: string;
    institution: string;
    annee: string;
    icon: string;
    markdown: string;
  }
  
  export const FORMATIONS: Formation[] = [
    {
      id: 1,
      titre: '🎓 Expert en Ingénierie Logicielle',
      institution: 'ISCOD – Institut Supérieur des Compétences',
      annee: '2024',
      icon: '/assets/images/competences/fullstack.png',
      markdown: `
  **🎯 Objectif :** Maîtriser les architectures complexes et le cycle de vie complet du développement logiciel.
  
  ### 🛠️ Modules clés :
  - Architecture logicielle avancée (DDD, Clean Architecture)
  - Gestion de projet Agile, Scrum & DevOps
  - Développement Full Stack (Angular, Node.js, Java Spring)
  
  ### 🧠 Acquis :
  Approche professionnelle du développement logiciel avec livrables réels et simulations en entreprise.
  `
    },
    {
      id: 2,
      titre: '🔧 Analyste DevOps',
      institution: 'INTA – Institut National des Technologies Avancées',
      annee: '2022',
      icon: '/assets/images/competences/devops.png',
      markdown: `
  **🎯 Objectif :** Automatiser, livrer et maintenir des applications modernes à l’échelle.
  
  ### 🛠️ Compétences pratiques :
  - Intégration continue (CI/CD) avec GitLab & GitHub Actions
  - Conteneurisation : Docker, orchestration avec Kubernetes
  - Infrastructure as Code (IaC) avec Ansible
  
  ### 📦 Projet final :
  Déploiement d'une application cloud-native avec pipeline CI/CD automatisé.
  `
    },
    {
      id: 3,
      titre: '🧑‍💻 Licence en Informatique',
      institution: 'Sorbonne Université – Paris',
      annee: '2019',
      icon: '/assets/images/competences/algorithm.png',
      markdown: `
  **🎯 Fondations solides en science informatique.**
  
  ### 📘 Cours principaux :
  - Algorithmique avancée & structures de données
  - Programmation orientée objet : Java, C, Python
  - Bases de données relationnelles (SQL) & Systèmes Unix/Linux
  
  ### 💡 Mémoire :
  Optimisation des performances d’un algorithme de tri hybride.
  `
    },
    {
      id: 4,
      titre: '📐 Licence en Mathématiques',
      institution: 'Université de Nouakchott',
      annee: '2017',
      icon: '/assets/images/competences/math.png',
      markdown: `
  **🎯 Renforcement de la logique, rigueur et abstraction.**
  
  ### 📘 Domaines étudiés :
  - Analyse, algèbre linéaire et probabilités
  - Statistiques & logique mathématique
  - Introduction à l'informatique scientifique (modélisation)
  
  ### ➕ Valeur ajoutée :
  Capacité à raisonner, démontrer, modéliser, optimiser.
  `
    }
  ];
  
  