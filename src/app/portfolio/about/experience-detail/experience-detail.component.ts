import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EXPERIENCES, ExperienceMarkdown } from './experience-data';
import { marked } from 'marked';

@Component({
  selector: 'app-experience-detail',
  standalone: false,
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css'] 
})
export class ExperienceDetailComponent {

  experienceId: number = 0;
  selectedExperience: ExperienceMarkdown | undefined;
  htmlContent: string = '';

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.experienceId = idParam ? +idParam : 0;

    this.selectedExperience = EXPERIENCES.find(e => e.id === this.experienceId);

    if (this.selectedExperience) {
      this.htmlContent = await marked.parse(this.selectedExperience.markdown);
    } else {
      this.htmlContent = `<p>Contenu introuvable pour l’expérience avec l’ID <strong>${this.experienceId}</strong>.</p>`;
    }
  }
}

