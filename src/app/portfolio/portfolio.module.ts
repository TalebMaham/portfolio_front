import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompetenceDetailComponentComponent} from './about/competence-detail-component/competence-detail-component.component' ; 
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceDetailComponent } from './about/experience-detail/experience-detail.component';
import { FormationDetailComponent } from './about/formation-detail/formation-detail.component';
import { SoftSkillDetailComponent } from './about/soft-skill-detail/soft-skill-detail.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/details/:id', component: ProjectDetailsComponent },
  {
    path: 'competence/:name',
    component: CompetenceDetailComponentComponent
  },

  {
    path: 'experience/:id',
    component:  ExperienceDetailComponent
  },

  {
    path: 'formation/:id',
    component:  FormationDetailComponent
  },

  {
    path: 'soft-skill/:id',
    component:  SoftSkillDetailComponent
  },

  {
    path: 'accueil',
    component:   AccueilComponent 
  },
  
];

@NgModule({
  declarations: [
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    ProjectDetailsComponent,
    CompetenceDetailComponentComponent,
    ExperienceDetailComponent,
    FormationDetailComponent,
    SoftSkillDetailComponent,
    AccueilComponent 
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Déclare les routes enfants
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule] // Permet de partager les routes
})
export class PortfolioModule {}
