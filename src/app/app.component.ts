import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],

  template: `
    <app-navbar></app-navbar>
    <div class="max-w-screen-xl mx-auto">
      <router-outlet></router-outlet>
      <app-whatsapp-button></app-whatsapp-button>
    </div>
    <app-footer></app-footer>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'giulia-spanu-website';
}
