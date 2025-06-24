// src/app/data/experience-data.ts
export interface ExperienceMarkdown {
    id: number;
    entreprise: string;
    poste: string;
    periode: string;
    icon: string;
    markdown: string;
  }
  


  export const EXPERIENCES: ExperienceMarkdown[] = [
    {
      id: 1,
      entreprise: 'E-thik',
      poste: 'Développeur Back-end',
      periode: '2022 - 2023',
      icon: '/assets/images/competences/javascript.png',
      markdown: `
  ## 🏢 E-thik
  
  **E-thik** est une entreprise engagée dans la création de solutions numériques responsables, durables et éthiques. Elle propose des plateformes tech éco-conçues, à faible impact environnemental.
  
  ---
  
  ### 🎯 Mes missions
  - Développement d’APIs REST sécurisées pour des applications métiers.
  - Modélisation et gestion de bases de données relationnelles (MySQL).
  - Automatisation de tests (Postman + scripts JS), documentation technique continue.
  
  ---
  
  ### 🛠 Technologies utilisées
  Node.js · Express · MySQL · Docker · Postman
  
  ---
  
  ### 💬 Ce que j’ai aimé
  - L’approche responsable du développement logiciel.
  - La liberté technique et les discussions autour des bonnes pratiques.
  - L’esprit collaboratif et bienveillant de l’équipe.
  
  ---
  
  ### 👀 Mon regard critique
  Cette expérience m’a permis de structurer ma logique back-end et d’apprendre à penser API-first. J’ai aussi appris à intégrer une démarche qualité (tests, documentation) dès le début du projet.
  `
    },
    {
      id: 2,
      entreprise: 'Cash Flow Positif',
      poste: 'Développeur Full Stack',
      periode: '2024 - 2025',
      icon: '/assets/images/competences/javascript.png',
      markdown: `
  ## 💼 Cash Flow Positif
  
  **Cash Flow Positif** est une fintech qui développe des outils de gestion financière pour freelances et micro-entrepreneurs, avec un fort accent sur l’expérience utilisateur.
  
  ---
  
  ### 🎯 Mes missions
  - Création d’une interface responsive avec Angular (SPA).
  - Développement de l’API back-end avec Django REST Framework.
  - Mise en production sur un VPS via Docker + NGINX.
  
  ---
  
  ### 🛠 Technologies utilisées
  Angular · Django · PostgreSQL · Docker · NGINX
  
  ---
  
  ### 💬 Ce que j’ai aimé
  - Travailler sur toute la chaîne de valeur : front, back, déploiement.
  - L’environnement agile et les sprints courts.
  - L’écoute des utilisateurs et les retours terrain rapides.
  
  ---
  
  ### 👀 Mon regard critique
  J’ai pris en maturité dans la gestion de projet full stack. J’ai aussi appris à gérer la communication entre front-end et back-end, et à produire un code maintenable et versionné proprement.
  `
    },
    {
      id: 3,
      entreprise: 'PARKOUR / Acadomia / Complétude',
      poste: 'Professeur',
      periode: '2020 - actuellement',
      icon: '/assets/images/competences/javascript.png',
      markdown: `
  ## 🎓 PARKOUR / Acadomia / Complétude
  
  Organismes de soutien scolaire reconnus, proposant un accompagnement personnalisé pour les élèves du collège au supérieur.
  
  ---
  
  ### 🎯 Mes missions
  - Cours individuels et en petit groupe en mathématiques, physique et informatique.
  - Préparation au baccalauréat, concours d’entrée, partiels.
  - Coaching pour la méthodologie de travail et la gestion du stress.
  
  ---
  
  ### 🎯 Public concerné
  Collégiens · Lycéens · Étudiants en BTS/DUT · Classes préparatoires
  
  ---
  
  ### 💬 Ce que j’ai aimé
  - Voir les progrès concrets des élèves et leur montée en confiance.
  - Adapter ma pédagogie à chaque profil.
  - Transmettre le goût de l’effort et de la logique.
  
  ---
  
  ### 👀 Mon regard critique
  Cette expérience a renforcé ma capacité à vulgariser, expliquer clairement, écouter et m’adapter. Elle m’a aussi apporté une grande rigueur dans la préparation et le suivi pédagogique.
  `
    }
  ];
  