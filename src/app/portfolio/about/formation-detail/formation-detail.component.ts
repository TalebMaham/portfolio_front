import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { Formation, FORMATIONS } from './formation-data';

@Component({
  selector: 'app-formation-detail',
  standalone: false,
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent {

  formationId: number = 0;
  selectedFormation: Formation | undefined;
  htmlContent: string = '';

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.formationId = idParam ? +idParam : 0;

    this.selectedFormation = FORMATIONS.find(f => f.id === this.formationId);

    if (this.selectedFormation) {
      this.htmlContent = await marked.parse(this.selectedFormation.markdown);
    } else {
      this.htmlContent = `<p>Formation non reconnue (ID : ${this.formationId}).</p>`;
    }
  }
}

