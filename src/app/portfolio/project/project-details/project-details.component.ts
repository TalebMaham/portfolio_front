import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // ✅
import { Project } from '../project.component';
import { PROJECTS } from './project-details-datas';
import { marked, type Tokens } from 'marked';

@Component({
  selector: 'app-project-details',
  standalone: false,
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer // ✅
  ) {
    marked.use({
      renderer: {
        heading(this: any, token: Tokens.Heading) {
          const { text, depth } = token;
          if (depth === 2) return `<h5 class="mt-4">${text}</h5>`;
          return `<h${depth}>${text}</h${depth}>`;
        }
      }
    });
  }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project = PROJECTS.find(p => p.id === +projectId) || null;
    }
  }

  formatMarkdown(md: string): SafeHtml {
    const rawHtml = marked(md) as string;
    return this.sanitizer.bypassSecurityTrustHtml(rawHtml); // ✅ autorise les styles inline
  }
}
