// project.model.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    context?: string;
    technologies: string[];
    etat: string;
    codeLink?: string;
    productionLink?: string;
    intro?: { text: string; image: string };
    details?: { text: string; image: string };
    conclusion?: { text: string; image: string };
  }
  