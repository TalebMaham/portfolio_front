import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) {}

  photoUrl = '/assets/logo.jpg'; // Photo de profil

  sections = [
    { title: 'Formations', isOpen: false },
    { title: 'Expériences Professionnelles', isOpen: false },
    { title: 'Compétences', isOpen: false },
    { title: 'Soft-Skills', isOpen: false },
    { title: 'Intérêts', isOpen: false },
  ];

 formations = [
    {id: 1,  titre: 'Expert en ingénierie logicielle', institution: 'ISCOD', annee: '2024',  icon: "/assets/images/formations/iscod.png" },
    {id :2,  titre: 'Analyste DevOps', institution: 'Institut National des Technologies Avancées', annee: '2022', icon: "/assets/images/formations/cfa-insta.png" },
    {id: 3,  titre: 'Licence en Informatique', institution: 'Sorbonne Université', annee: '2019', icon: "/assets/images/formations/sorbonne.png" },
    {id: 4,  titre: 'Licence en Mathématiques', institution: 'Université de Nouakchott', annee: '2017', icon: "/assets/images/formations/u_n_a.png" }
  ];
  

 experiences = [
    {id : 1,  poste: 'Développeur Back-end', entreprise: 'E-thik', periode: '2022 - 2023', icon: "/assets/images/competences/javascript.png" },
    {id : 2,  poste: 'Développeur Full Stack', entreprise: 'Cash Flow Positif', periode: '2024 - 2025', icon: "/assets/images/competences/javascript.png" },
    {id : 3,  poste: 'Professeur', entreprise: 'PARKOUR, Acadomia, Complétude', periode: '2020 - actuellement', icon: "/assets/images/competences/javascript.png" },
  ];
  
  interets = ['Lecture', 'Pêche', 'Voyages', 'Développement Web'];

  competences = [
    { name: 'JavaScript', icon: '/assets/images/competences/javascript.png' },
    { name:  'Flask', icon: '/assets/images/competences/flask.png'},
    { name: 'Django', icon: '/assets/images/competences/django.png'},
    { name: 'Angular', icon: '/assets/images/competences/angular.png' },
    { name: 'React', icon: '/assets/images/competences/react.png' },
    { name: 'TypeScript', icon: '/assets/images/competences/typescript.png' },
    { name: 'Node.js', icon: '/assets/images/competences/nodejs.png' },
    { name: 'Symfony', icon: '/assets/images/competences/symfony.png' },
    { name: 'MySQL', icon: '/assets/images/competences/mysql.png' },
    { name: 'Python', icon: '/assets/images/competences/python.png' },
    { name: 'Git', icon: '/assets/images/competences/git.png' }
  ];


  softSkills = [
    {id : 1,  name: 'JavaScript', icon: '/assets/images/competences/javascript.png' },
    {id : 2,  name:  'Flask', icon: '/assets/images/competences/flask.png'},
    {id : 3,  name: 'Django', icon: '/assets/images/competences/django.png'},

  ];

  // Navigation vers les différentes pages
  navigateToProjects() {
    this.router.navigate(['portfolio/project']);
  }

  navigateToContact() {
    this.router.navigate(['portfolio/contact']);
  }

  toggleAccordion(title: string): void {
    this.sections.forEach((section) => {
      if (section.title === title) {
        section.isOpen = !section.isOpen;
      } else {
        section.isOpen = false; // Ferme les autres sections
      }
    });
  }

}
