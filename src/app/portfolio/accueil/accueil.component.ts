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
  Bienvenue sur mon portfolio.  
  Je m’appelle **Sidi Mohamed TALEB MAHAM**. Je suis passionné par le développement logiciel, et j’aime construire des solutions de A à Z — du front jusqu’au back, en passant par la logique métier et l’architecture.  

  Aujourd’hui, je travaille comme **développeur back-end chez e-thik**, où je mets en place des systèmes solides, pensés pour durer et évoluer avec les besoins.  

  Mon objectif est simple : créer des applis utiles, rapides, claires, qui répondent à un vrai besoin.  
  Je m’appuie aussi sur de bonnes bases en **logique mathématique**, ce qui m’aide à structurer mes idées, aller au fond des problèmes, et trouver des solutions propres.

  Je suis toujours curieux. J’aime découvrir des outils, tester de nouvelles approches, automatiser ce qui peut l’être. Ce qui compte pour moi, c’est que ça serve vraiment — pas juste faire joli ou compliqué pour rien.

---

## 🎯 Mon approche

**Simple, rapide, efficace.**

C’est comme ça que je pense mes projets. Je ne cherche pas la solution la plus impressionnante, je cherche celle qui fonctionne, qu’on comprend vite, et qu’on peut maintenir sans galérer.

- **Simple** : un code clair, qu’on peut relire dans 6 mois sans se demander ce que ça fait. Ce n’est pas forcément facile à écrire, mais c’est facile à comprendre. Et ça, c’est précieux en équipe.

- **Efficace** : j’aime quand ça avance. Une bonne solution, c’est celle qui règle le problème sans détour. Je fais en sorte que le travail soit utile, qu’il livre quelque chose de concret, rapidement.

- **Rapide** : quand c’est simple et bien pensé, on gagne du temps. Je peux répondre vite, m’adapter, corriger sans tout casser. Ça me permet de rester réactif même dans les projets qui bougent beaucoup.

---
## 🧭 Mon parcours

Mon parcours est **riche et multidisciplinaire**. J’ai appris et pratiqué dans plusieurs domaines :

- **Mathématiques et algorithmique**, pour structurer et optimiser.
- **Développement web**, front-end et back-end.
- **Systèmes embarqués** et **Internet des objets**, pour relier matériel et logiciel.
- **Ingénierie logicielle**, pour construire des solutions durables et évolutives.

---
### ✈️ Centres d’intérêt

En dehors du développement, j’accorde une place importante à mes centres d’intérêt, qui m’aident à équilibrer réflexion, détente et ouverture.

- 📚 **Lecture** : elle nourrit ma curiosité, élargit mes idées, et m’inspire souvent dans ma manière de structurer un raisonnement ou un projet.
- 🎣 **Pêche** : un moment de calme et de patience, loin des écrans, qui me permet de me recentrer.
- ✈️ **Voyages** : l’occasion de découvrir de nouvelles cultures, de nouvelles façons de penser, et d’enrichir ma vision du monde — une qualité précieuse dans un métier où l’adaptation est essentielle.

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
