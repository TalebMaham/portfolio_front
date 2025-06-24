import { Component, AfterViewInit } from '@angular/core';
import { PortfolioModule } from './portfolio/portfolio.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-frontend';

  ngAfterViewInit(): void {
    const name = "Sidi Mohamed TALEB MAHAM";
    const desc = "Je suis développeur full stack passionné. Découvrez mes projets, mes compétences et apprenez-en plus sur mon parcours.";

    this.typeText("name", name, 50).then(() => {
      this.typeText("desc", desc, 30);
    });
  }

  async typeText(elementId: string, text: string, delay: number): Promise<void> {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerHTML = '';
    for (const char of text) {
      el.innerHTML += char;
      await new Promise(res => setTimeout(res, delay));
    }
  }
}
