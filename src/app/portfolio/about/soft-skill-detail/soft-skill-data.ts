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
      name: 'Communication claire',
      icon: '/assets/images/soft-skills/micro.png',
      markdown: `
  ## 🗣️ La communication claire
  
  ---
  
  ### 🔎 Ma définition

  La communication claire, c’est quand ce que je dis est compris tout de suite, sans que l’autre ait besoin de me reposer la question. C’est aller droit au but, sans jargon inutile. Quand j’explique quelque chose, je veux que ce soit simple, concret, sans flou. Si quelqu’un bloque, je reformule. Si c’est long, je découpe. Je ne cherche pas à impressionner, je cherche à me faire comprendre. Dans un projet, mal s’exprimer, c’est perdre du temps. Bien s’exprimer, c’est avancer ensemble.

  ---
  
  ### 📂 Mes éléments de preuve
  - Présentations de projets en entreprise.
  - Animation de réunions techniques.
  - Interventions orales lors de sessions de formation.
    <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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
      name: 'Esprit d’équipe',
      icon: '/assets/images/soft-skills/trello.png',
      markdown: `
  ## 🤝 Collaborer
  
  ---
  
  ### 🔎 Ma définition

  Dans un projet logiciel, collaborer, c’est plus que juste bosser à plusieurs. C’est partager son code, ses idées, ses doutes. C’est faire des revues de code sans juger, poser des questions sans gêne, aider quand quelqu’un bloque. Je ne travaille pas pour montrer que j’ai raison, je travaille pour que le produit sorte propre et solide. Quand on collabore bien, on gagne du temps, on évite les malentendus, et surtout, on ne reste jamais seul face à un bug. Le but, ce n’est pas d’avoir des héros, c’est d’avoir une équipe qui avance.

  ---
  
  ### 📂 Mes éléments de preuve
  - Travail en équipe dans des projets agiles.
  - Pair programming sur des tâches critiques.
  - Communication fluide dans des contextes interculturels.
    <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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
      name: 'Gestion du temps',
      icon: '/assets/images/soft-skills/pomodor.png',
      markdown: `
  ## 🧭Gestion du temps
  
  ---
  
  ### 🔎 Ma définition

  En génie logiciel, gérer son temps, c’est surtout éviter de le gaspiller. Il y a toujours des tâches urgentes, du code à revoir, des réunions qui s’ajoutent. Si je ne hiérarchise pas, je me fais aspirer. Alors je pose mes priorités : ce qui débloque l’équipe d’abord, les tâches complexes ensuite, les détails plus tard. J’essaie de regrouper les choses similaires pour ne pas me disperser. Je garde du temps pour réfléchir, pas juste pour exécuter. Et surtout, je ne me cache pas derrière le mot "chargé" : si je perds du temps, je me le dis, je corrige. Pour moi, bien gérer mon temps, c’est écrire moins, mais mieux.

    
  ---
  
  ### 📂 Mes éléments de preuve
  - Encadrement de développeurs juniors.
  - Prise en charge de l’organisation de sprints.
  - Décisions techniques sur des choix d’architecture.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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
      icon: '/assets/images/soft-skills/pb.png',
      markdown: `
  ## 🧠 Résoudre des problèmes
  
  ---
  
  ### 🔎 Ma définition

  Résoudre un problème en génie logiciel, ce n’est pas juste trouver une solution, c’est comprendre **vraiment** d’où vient le bug ou le blocage. Je commence par observer, reproduire, poser les bonnes questions. Parfois, ce n’est pas le code le souci, c’est la logique, la spec, ou un truc mal compris entre deux devs. J’évite de patcher vite fait. Je préfère perdre du temps à bien creuser que corriger trois fois. Une fois que j’ai la cause, je cherche une solution simple, stable, et si possible réutilisable. Résoudre un problème, c’est pas briller, c’est débloquer les autres et éviter que ça revienne.

    
  ---
  
  ### 📂 Mes éléments de preuve
  - Résolution de bugs critiques en production.
  - Refactorisation de code inefficace.
  - Propositions d’optimisations dans l’architecture logicielle.
  <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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
      icon: '/assets/images/soft-skills/pomodor.png',
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
    <div style="margin-top: 1rem;">
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/6">Porfolio</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/4">Blood Bank</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/2">Monnayeur</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/3">Casiers</a>
    <a class="btn btn-outline-secondary" href="/portfolio/project/details/1">Gestion de stock</a>
  </div>
  
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
  