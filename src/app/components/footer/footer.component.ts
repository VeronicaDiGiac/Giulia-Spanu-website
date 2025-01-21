import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer bg-yellow-100 text-base-content p-10">
      <nav>
        <a class="link link-hover" routerLink="chi-sono">Chi sono</a>
        <a class="link link-hover" routerLink="servizi">Servizi</a>
        <a class="link link-hover" routerLink="contatti">Contatti</a>
      </nav>
      <nav>
        <!-- Instagram -->
        <h6 class="footer-title">Social</h6>
        <div class="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/ink.juliart?igsh=MWNhcWt6aHhnd3VndA=="
            target="_blank"
          >
            <div class="ista_icon" aria-label="Instagram"></div>
          </a>
        </div>
      </nav>

      <nav class="flex flex-col space-y-2">
        <!-- Telefono -->
        <a
          href="tel:3467133115"
          class="link link-hover flex items-center space-x-2 text-gray-800 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M2 5.75A3.75 3.75 0 015.75 2h1.498a3.75 3.75 0 013.662 3.018l.3 1.49a3.75 3.75 0 01-.859 3.287l-1.097 1.197a.75.75 0 00-.144.767c.387 1.093 1.276 2.565 2.217 3.506.941.941 2.413 1.83 3.506 2.217.266.094.562.02.767-.144l1.197-1.097a3.75 3.75 0 013.287-.859l1.49.3A3.75 3.75 0 0122 16.753v1.498A3.75 3.75 0 0118.25 22H16.5C10.701 22 2 13.299 2 7.5V5.75z"
            />
          </svg>
          <span>+39 328 621 4867</span>
        </a>

        <!-- Email -->
        <a
          href="mailto:giuliaspanupsicologa@gmail.it"
          class="link link-hover flex items-center space-x-2 text-gray-800 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M1.5 6.75A3.75 3.75 0 015.25 3h13.5A3.75 3.75 0 0122.5 6.75v10.5a3.75 3.75 0 01-3.75 3.75H5.25A3.75 3.75 0 011.5 17.25V6.75zM5.25 4.5A2.25 2.25 0 003 6.75v.298l9 5.144 9-5.144V6.75a2.25 2.25 0 00-2.25-2.25H5.25zM3 8.57v8.68a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25V8.57l-8.273 4.729a.75.75 0 01-.754 0L3 8.57z"
            />
          </svg>
          <span> giuliaspanu93&#64;libero.it </span>
        </a>

        <!-- Indirizzo -->
        <a
          href="https://www.google.com/maps/search/?api=1&query=Via+Cardinal+Mistrangelo+25,+Roma+00167"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-hover flex items-center space-x-2 text-gray-800 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
            />
          </svg>
          <span
            >Via Cardinal Mistrangelo 25, Roma 00167 (Metro A: Baldo degli
            Ubaldi)</span
          >
        </a>
      </nav>
    </footer>
  `,
  styles: `
  .ista_icon{
   background-image: url('src/assets/instagram.png');
  background-size: cover;
    background-position: cover;
    width: 30px;
    height: 30px;
  }`,
})
export class FooterComponent {}
