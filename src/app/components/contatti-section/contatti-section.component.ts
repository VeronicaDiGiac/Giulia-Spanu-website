import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contatti-section',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <h1 class="text-center m-5 text-gray-700 text-2xl font-semibold">
      Compila il form se vuoi contattarmi per ulteriori informazioni o
      chiarimenti
    </h1>
    <app-contact></app-contact>
    <h1 class="text-center m-5 text-gray-700 text-2xl font-semibold">
      Puoi trovarmi anche su WhatsApp, oppure al mio numero di telefono
    </h1>

    <div
      class="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-10 space-y-5 sm:space-y-0 m-10"
    >
      <!-- Icona Telefono -->
      <div class="flex items-center space-x-3">
        <a
          href="tel:3467133115"
          class="link link-hover flex items-center space-x-2 text-gray-800 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M2 5.75A3.75 3.75 0 015.75 2h1.498a3.75 3.75 0 013.662 3.018l.3 1.49a3.75 3.75 0 01-.859 3.287l-1.097 1.197a.75.75 0 00-.144.767c.387 1.093 1.276 2.565 2.217 3.506.941.941 2.413 1.83 3.506 2.217.266.094.562.02.767-.144l1.197-1.097a3.75 3.75 0 013.287-.859l1.49.3A3.75 3.75 0 0122 16.753v1.498A3.75 3.75 0 0118.25 22H16.5C10.701 22 2 13.299 2 7.5V5.75z"
            />
          </svg>
          <span class="text-gray-700 text-lg">+39 328 621 4867</span>
        </a>
      </div>

      <!-- Icona WhatsApp -->
      <div class="flex items-center space-x-3">
        <a
          href="https://wa.me/393286214867"
          class="link link-hover flex items-center space-x-2 text-gray-800 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.52 3.49A10.72 10.72 0 0 0 3.49 20.52L2 23.94l3.42-.91a10.72 10.72 0 0 0 5.06 1.31h.01a10.71 10.71 0 0 0 10.71-10.71 10.71 10.71 0 0 0-3.68-8.13zm-9.81 15a8.62 8.62 0 0 1-4.42-1.21l-.31-.18-2.54.67.68-2.47-.18-.31A8.62 8.62 0 1 1 8.62 19.49zM17.11 14c-.34-.17-2-1-2.31-1.12-.3-.11-.52-.17-.73.17s-.84 1.12-1.04 1.34-.39.25-.72.08a8.72 8.72 0 0 1-2.57-1.6 9.61 9.61 0 0 1-1.8-2.24c-.19-.34 0-.53.14-.7.14-.16.3-.4.45-.6.14-.19.2-.34.3-.57s.05-.43-.02-.6a3.41 3.41 0 0 0-.68-1.06c-.18-.19-.38-.24-.57-.24-.14 0-.3 0-.46.01a.88.88 0 0 0-.65.3c-.22.24-.84.83-.84 2.01s.86 2.32.98 2.48c.13.16 1.67 2.57 4.06 3.6.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.4-.57 1.6-1.12.2-.54.2-1 .14-1.12-.05-.11-.2-.17-.41-.26z"
            />
          </svg>
          <span class="text-gray-700 text-lg">+39 328 621 4867</span>
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class ContattiSectionComponent {}
