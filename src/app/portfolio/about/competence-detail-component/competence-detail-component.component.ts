import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { COMPETENCES } from './competence-data';


@Component({
  selector: 'app-competence-detail-component',
  standalone: false,
  templateUrl: './competence-detail-component.component.html',
  styleUrls: ['./competence-detail-component.component.css']
})
export class CompetenceDetailComponentComponent implements OnInit {
  competenceName: string = '';
  selectedCompetence: any;
  htmlContent: string = '';

  competences = [
    { name: 'JavaScript', icon: '/assets/images/competences/javascript.png' },
    { name: 'Flask', icon: '/assets/images/competences/flask.png' },
    { name: 'Django', icon: '/assets/images/competences/django.png' },
    { name: 'Angular', icon: '/assets/images/competences/angular.png' },
    { name: 'React', icon: '/assets/images/competences/react.png' },
    { name: 'TypeScript', icon: '/assets/images/competences/typescript.png' },
    { name: 'Node.js', icon: '/assets/images/competences/nodejs.png' },
    { name: 'Symfony', icon: '/assets/images/competences/symfony.png' },
    { name: 'MySQL', icon: '/assets/images/competences/mysql.png' },
    { name: 'Python', icon: '/assets/images/competences/python.png' },
    { name: 'Git', icon: '/assets/images/competences/git.png' }
  ];

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.competenceName = this.route.snapshot.paramMap.get('name') || '';
  
    this.selectedCompetence = this.competences.find(
      c => c.name.toLowerCase() === this.competenceName.toLowerCase()
    );
  
    const markdownData = COMPETENCES.find(
      c => c.name.toLowerCase() === this.competenceName.toLowerCase()
    );
  
    if (markdownData) {
      this.htmlContent = await marked.parse(markdownData.markdown); // ✅ solution
    } else {
      this.htmlContent = `<p>Contenu introuvable pour <strong>${this.competenceName}</strong>.</p>`;
    }
  }
  
}

