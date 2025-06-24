import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/portfolio2/portfolio/accueil', pathMatch: 'full' }, // Redirige par défaut
  { 
    path: 'portfolio', 
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) 
  },
  { path: '**', redirectTo: '/portfolio2/portfolio/accueil' } // Gestion des routes inconnues
];
