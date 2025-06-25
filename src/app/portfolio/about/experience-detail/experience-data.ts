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
      periode: '2023 - 2025',
      icon: '/assets/images/experiences/e-thik.png',
      markdown: `
### 🏢 À propos de E-thik

**E-thik** est une entreprise spécialisée dans la **traçabilité intelligente**, l’**identification** et la **connectivité industrielle**. Elle conçoit et fabrique des solutions matérielles et logicielles sur mesure pour accompagner les entreprises dans leur transformation digitale.  
Grâce à une expertise en systèmes embarqués, RFID, IoT et logiciels métiers, E-thik intervient dans divers secteurs comme l'industrie, la logistique ou encore l’énergie, avec une approche orientée **efficacité terrain** et **innovation utile**.

  ---
  
### 🎯 Mes missions

- Lire et comprendre la documentation du matériel et des logiciels embarqués (firmwares) afin d'assurer une communication fluide avec nos solutions.
- Analyser le cahier des charges fonctionnel fourni par les chefs de projet ou les référents techniques.
- Définir les deadlines de livraison en accord avec les priorités et les contraintes du projet.
- Implémenter les solutions techniques conformément aux spécifications.
- Tester le produit pour garantir sa stabilité, sa fiabilité et sa conformité aux attentes.
- Intervenir techniquement en cas de dysfonctionnement pour identifier, corriger et documenter les bugs.

  
  ---
  
  ### 🛠 Technologies utilisées

  **Langages** : C, C++, C#, Python  
  **Bases de données & Messaging** : PostgreSQL, RabbitMQ  
  **Back-end** : Django REST, Flask  
  **Outils & DevOps** : Docker, Postman

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
      periode: '2022 - 2023',
      icon: '/assets/images/experiences/cash-flow.png',
      markdown: `
### 💼 À propos de Cash Flow Positif

**Cash Flow Positif** est une entreprise spécialisée dans l’**accompagnement stratégique des investisseurs** et la **création de structures rentables**.  
Elle propose des services concrets pour optimiser le **montage de sociétés**, la **gestion de patrimoine** et le **développement d’activités génératrices de cash flow**, en s’appuyant sur une forte expertise juridique, fiscale et entrepreneuriale.  
L’objectif : aider les entrepreneurs à structurer leur business pour atteindre une **rentabilité durable** et un **cash flow positif** dès les premiers mois.

  ---
  
  ### 🎯 Mes missions

  - Conception et développement complet, de la base de données jusqu’au front-end.
  - Implémentation de l’interface utilisateur avec Angular (SPA) et intégration via Twig côté serveur.
  - Développement back-end en Symfony avec MySQL comme base de données principale.
  - Mise en place de l’API REST, sécurisation des échanges et gestion des rôles utilisateurs.
  - Écriture de tests à tous les niveaux : unitaires, fonctionnels et d’intégration.
  - Utilisation d’outils de **code coverage** pour garantir la qualité du code.
  - Déploiement en production sur VPS avec Docker et configuration NGINX.

  
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
      icon: '/assets/images/experiences/prof.png',
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
  