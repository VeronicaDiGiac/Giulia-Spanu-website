import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contatti-section',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <h1 class="text-center m-5  text-gray-700 text-2xl font-semibold">
      Compila il form se vuoi contattarmi
    </h1>
    <app-contact></app-contact>
  `,
  styles: ``,
})
export class ContattiSectionComponent {}
