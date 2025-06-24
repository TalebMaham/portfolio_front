import { Component } from '@angular/core';
import { Modal } from 'bootstrap';
import { PROJECTS } from './project.data';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = PROJECTS;
  selectedProject: Project | null = null;

  openModal(project: any): void {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  viewCode(link: string): void {
    window.open(link, '_blank');
  }

  goToProduction(link: string): void {
    window.open(link, '_blank');
  }
}

export interface Project {
  id : number; 
  title: string;
  description: string;
  image: string;
  context: string;
  technologies: string[];
  etat: string;
  codeLink?: string;
  productionLink?: string;
  intro?: { text: string; image: string };
  details?: { text: string; image: string };
  conclusion?: { text: string; image: string };
}
