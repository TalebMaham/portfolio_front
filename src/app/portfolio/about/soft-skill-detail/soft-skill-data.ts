// src/app/data/soft-skill-data.ts
export interface SoftSkill {
    id: number;
    name: string;
    icon: string;
    markdown: string;
  }
  

  export const SOFT_SKILLS: SoftSkill[] = [
    {
      id: 1,
      name: 'Parler dans le public',
      icon: '/assets/images/competences/javascript.png',
      markdown: `
  ## 🗣️ Parler en public
  
  ---
  
  ### 🔎 Ma définition
  C’est la capacité à transmettre clairement ses idées devant un groupe, en s’adaptant à l’auditoire et en gérant son stress.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Présentations de projets en entreprise.
  - Animation de réunions techniques.
  - Interventions orales lors de sessions de formation.
  
  ---
  
  ### 🧪 Mon autocritique
  - À l’aise avec des audiences connues.
  - Gestion du trac perfectible face à un public inconnu.
  - Travail en cours sur la concision et l’impact du message.
  
  ---
  
  ### 📈 Mon évolution
  - Formation suivie à l’ISCOD.
  - Multiplication des prises de parole en contexte pro.
  - Application des retours reçus pour améliorer le discours.
  `
    },
    {
      id: 2,
      name: 'Collaborer',
      icon: '/assets/images/competences/flask.png',
      markdown: `
  ## 🤝 Collaborer
  
  ---
  
  ### 🔎 Ma définition
  Collaborer, c’est travailler efficacement avec d’autres personnes pour atteindre un objectif commun tout en maintenant un bon climat de travail.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Travail en équipe dans des projets agiles.
  - Pair programming sur des tâches critiques.
  - Communication fluide dans des contextes interculturels.
  
  ---
  
  ### 🧪 Mon autocritique
  - À l’écoute et respectueux des avis divergents.
  - Difficulté occasionnelle à gérer les désaccords sous pression.
  - Tendance à trop vouloir aider, au risque de surcharger.
  
  ---
  
  ### 📈 Mon évolution
  - Pratique régulière en entreprise (Cash Flow Positif).
  - Amélioration de la communication non violente.
  - Expérience enrichissante dans les projets collaboratifs.
  `
    },
    {
      id: 3,
      name: 'Diriger',
      icon: '/assets/images/competences/django.png',
      markdown: `
  ## 🧭 Diriger
  
  ---
  
  ### 🔎 Ma définition
  Diriger, c’est donner une vision, organiser, prendre des décisions et accompagner les autres dans leur montée en compétence.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Encadrement de développeurs juniors.
  - Prise en charge de l’organisation de sprints.
  - Décisions techniques sur des choix d’architecture.
  
  ---
  
  ### 🧪 Mon autocritique
  - Sait motiver et guider une équipe.
  - Besoin d’amélioration sur la délégation équilibrée.
  - Parfois trop exigeant sur les délais.
  
  ---
  
  ### 📈 Mon évolution
  - Apprentissage à la Sorbonne et en entreprise (Acadomia).
  - Retour d’expérience positif d’équipes encadrées.
  - Amélioration continue via feedbacks et formation.
  `
    },
    {
      id: 4,
      name: 'Résoudre des problèmes',
      icon: '/assets/images/competences/python.png',
      markdown: `
  ## 🧠 Résoudre des problèmes
  
  ---
  
  ### 🔎 Ma définition
  C’est la capacité à analyser une situation complexe, identifier les causes et proposer des solutions efficaces.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Résolution de bugs critiques en production.
  - Refactorisation de code inefficace.
  - Propositions d’optimisations dans l’architecture logicielle.
  
  ---
  
  ### 🧪 Mon autocritique
  - Forte capacité d’analyse logique.
  - Tendance à passer trop de temps sur certaines pistes.
  - À perfectionner : priorisation des solutions.
  
  ---
  
  ### 📈 Mon évolution
  - Amélioration continue par la pratique quotidienne.
  - Résolution de cas concrets en projet (SimulTech).
  - Formé à la méthode hypothético-déductive.
  `
    },
    {
      id: 5,
      name: 'Gérer son temps',
      icon: '/assets/images/competences/typescript.png',
      markdown: `
  ## ⏳ Gérer son temps
  
  ---
  
  ### 🔎 Ma définition
  Gérer son temps, c’est savoir organiser ses tâches, respecter les délais, et s’adapter aux imprévus sans perdre en efficacité.
  
  ---
  
  ### 📂 Mes éléments de preuve
  - Utilisation quotidienne d’outils comme Trello, Notion.
  - Répartition efficace entre tâches prioritaires et secondaires.
  - Livraison de projets dans les délais.
  
  ---
  
  ### 🧪 Mon autocritique
  - Organisation naturelle forte.
  - Difficulté parfois à dire non ou à fixer des limites.
  - Progrès à faire sur les marges de sécurité.
  
  ---
  
  ### 📈 Mon évolution
  - Amélioration à travers des projets à échéances strictes.
  - Formé à la priorisation (méthode Eisenhower, agile).
  - Application concrète dans le quotidien professionnel.
  `
    }
  ];
  