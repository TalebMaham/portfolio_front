import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { marked, Tokens } from 'marked';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  htmlContent: SafeHtml = '';

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    marked.use({
      renderer: {
        heading(this: any, token: Tokens.Heading) {
          const { text, depth } = token;
          if (depth === 2) return `<h5 class="mt-4">${text}</h5>`;
          return `<h${depth}>${text}</h${depth}>`;
        }
      }
    });

    const md = `
Bienvenue sur mon portfolio. Je m'appelle **Sidi Mohamed TALEB MAHAM**, un passionné du développement logiciel capable de concevoir des solutions complètes, du front-end à l'infrastructure backend.  
Mon objectif : créer des applications performantes, intuitives et utiles.

---

## 🎯 Mon approche

**Simple, rapide, efficace.**

Je privilégie les solutions :

- **Simples**, pour garantir une prise en main rapide.
- **Rapides**, pour offrir des performances optimales.
- **Efficaces**, pour répondre précisément aux besoins des utilisateurs.

---

## 🔍 Navigation

<div class="d-flex gap-2 mt-3">
  <button class="btn btn-primary btn-sm" onclick="window.dispatchEvent(new CustomEvent('navigate', { detail: 'portfolio/about' }))">About</button>
  <button class="btn btn-primary btn-sm" onclick="window.dispatchEvent(new CustomEvent('navigate', { detail: 'portfolio/project' }))">Projects</button>
  <button class="btn btn-primary btn-sm" onclick="window.dispatchEvent(new CustomEvent('navigate', { detail: 'portfolio/contact' }))">Contact</button>
</div>
    `;

    this.htmlContent = this.formatMarkdown(md);
    window.addEventListener('navigate', (event: any) => this.navigate(event.detail));
  }

  formatMarkdown(md: string): SafeHtml {
    const rawHtml = marked.parse(md) as string;
    return this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
