import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer bg-yellow-100 text-base-content p-10">
      <nav>
        <a class="link link-hover">Chi sono</a>
        <a class="link link-hover">Servizi</a>
        <a class="link link-hover">Contatti</a>
        <a class="link link-hover">Articoli</a>
      </nav>

      <nav>
        <h6 class="footer-title">Social</h6>
        <div class="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
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
          href="mailto:giuliaspanu93@libero.it"
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
  styles: ``,
})
export class FooterComponent {}
