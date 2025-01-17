import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<section class="p-4 sm:p-6 md:p-8">
    <div class="max-w-lg mx-auto bg-gray-200 p-4 sm:p-6 rounded-lg shadow-lg">
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="mb-4">
            <label for="nome" class="block text-gray-700 font-medium mb-2"
              >Nome</label
            >
            <input
              type="text"
              id="nome"
              formControlName="nome"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              [class.border-red-500]="isFieldInvalid('nome')"
            />
          </div>
          <div class="mb-4">
            <label for="cognome" class="block text-gray-700 font-medium mb-2"
              >Cognome</label
            >
            <input
              type="text"
              id="cognome"
              formControlName="cognome"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              [class.border-red-500]="isFieldInvalid('cognome')"
            />
          </div>
          <div class="mb-4 col-span-1 sm:col-span-2">
            <label for="email" class="block text-gray-700 font-medium mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              formControlName="email"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              [class.border-red-500]="isFieldInvalid('email')"
            />
          </div>
          <div class="mb-6 col-span-1 sm:col-span-2">
            <label for="messaggio" class="block text-gray-700 font-medium mb-2"
              >Messaggio</label
            >
            <textarea
              id="messaggio"
              formControlName="messaggio"
              rows="5"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              [class.border-red-500]="isFieldInvalid('messaggio')"
            ></textarea>
          </div>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="px-6 py-3 bg-blue-300 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto"
            [disabled]="contactForm.invalid"
          >
            Invia Messaggio
          </button>
        </div>
      </form>
    </div>
  </section> `,
  styles: ``,
})
export class ContactComponent {
  contactForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cognome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]),
    messaggio: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(3),
    ]),
  });

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control?.invalid && (control.dirty || control.touched);
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('submit chiamata');
      console.log(formData.messaggio);
      emailjs
        .send(
          'service_t672znt', // Sostituisci con il tuo ID servizio EmailJS
          'template_6j5v2k4', // Sostituisci con il tuo ID template EmailJS
          {
            nome: `${formData.nome}`,
            cognome: ` ${formData.cognome}`,
            email: ` ${formData.email}`,
            messaggio: ` ${formData.messaggio}`,
          },
          'wMLjHnKhLQgum55-S' // Sostituisci con la tua chiave pubblica EmailJS
        )
        .then(
          () => {
            alert('Messaggio inviato con successo!');
            this.contactForm.reset();
          },
          (error) => {
            alert("Errore durante l'invio del messaggio: " + error.text);
          }
        );
    }
  }
}
