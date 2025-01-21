import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  template: `
    <a
      [href]="whatsAppUrl"
      target="_blank"
      class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 "
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
    </a>
  `,
  styles: ``,
})
export class WhatsappButtonComponent {
  whatsAppUrl: string = 'https://wa.me/+393286214867';
}
