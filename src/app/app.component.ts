import { Component } from '@angular/core';
import { PortfolioModule } from './portfolio/portfolio.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-frontend';
}

