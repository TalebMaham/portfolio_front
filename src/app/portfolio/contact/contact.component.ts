import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  isRecrutement = false;
  showToast = false;

  // Gère le changement dans le champ "Raison de contact"
  onReasonChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.isRecrutement = target.value === 'recrutement';
  }

  // Gère la soumission du formulaire
  onSubmit(formData: any) {
    console.log('Formulaire soumis :', formData);

    // Réinitialisation du formulaire
    if (this.contactForm) {
      this.contactForm.resetForm();
      this.isRecrutement = false; // Réinitialiser l'affichage conditionnel
    }

    // Afficher le toast
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); // Disparition du toast après 3 secondes
  }
}
