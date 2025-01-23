import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/portfolio2/portfolio/about', pathMatch: 'full' }, // Redirige par défaut
  { 
    path: 'portfolio', 
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) 
  },
  { path: '**', redirectTo: '' } // Gestion des routes inconnues
];
