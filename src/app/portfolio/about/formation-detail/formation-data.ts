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
      icon: '/assets/images/formations/iscod.png',
      markdown: `

  📍 [ISCOD – Institut Supérieur des Compétences de Demain](https://www.iscod.fr)  
      92-98 Boulevard Victor Hugo, 92110 Clichy, France

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
      institution: 'CFA-INSTA – Institut National des Technologies Avancées',
      annee: '2022',
      icon: '/assets/images/formations/cfa-insta.png',
      markdown: `
  🏫 [CFA-INSTA – Institut National des Technologies Avancées](https://www.cfa-insta.fr)  
  12 Rue Alexandre Parodi, 75010 Paris, France

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
      icon: '/assets/images/formations/sorbonne.png',
      markdown: `


  🎓 [Sorbonne Université](https://www.sorbonne-universite.fr)  
    4 Place Jussieu, 75005 Paris, France

  **🎯 Fondations solides en science informatique.**
  
  ### 📘 Cours principaux :
  - Algorithmique avancée & structures de données
  - Programmation orientée objet : Java, C, Python
  - Bases de données relationnelles (SQL) & Systèmes Unix/Linux
  


  `
    },
    {
      id: 4,
      titre: '📐 Licence en Mathématiques',
      institution: 'Université de Nouakchott',
      annee: '2017',
      icon: '/assets/images/formations/u_n_a.png',
      markdown: `
  
  🎓 [Université de Nouakchott Al Aasriya](https://www.univ-nkc.mr)  
      Avenue Gamal Abdel Nasser, Nouakchott, Mauritanie

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
  
  