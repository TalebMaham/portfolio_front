import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked, Tokens } from 'marked';
import { SOFT_SKILLS, SoftSkill } from './soft-skill-data';

@Component({
  selector: 'app-soft-skill-detail',
  standalone: false,
  templateUrl: './soft-skill-detail.component.html',
  styleUrls: ['./soft-skill-detail.component.css']
})
export class SoftSkillDetailComponent {
  softSkillId: number = 0;
  selectedSoftSkill: SoftSkill | undefined;
  htmlContent: SafeHtml = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  async ngOnInit(): Promise<void> {
    marked.use({
      renderer: {
        heading(this: any, token: Tokens.Heading) {
          const { text, depth } = token;
          if (depth === 2) return `<h5 class="mt-4">${text}</h5>`;
          return `<h${depth}>${text}</h${depth}>`;
        }
      }
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    this.softSkillId = idParam ? +idParam : 0;

    this.selectedSoftSkill = SOFT_SKILLS.find(s => s.id === this.softSkillId);

    if (this.selectedSoftSkill) {
      this.htmlContent = this.formatMarkdown(this.selectedSoftSkill.markdown);
    } else {
      this.htmlContent = `<p>Soft skill non reconnue (ID : ${this.softSkillId}).</p>`;
    }
  }

  formatMarkdown(md: string): SafeHtml {
    const rawHtml = marked(md) as string;
    return this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }
}
