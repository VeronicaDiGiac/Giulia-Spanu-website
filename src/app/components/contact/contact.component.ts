import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `<section class="p-4 sm:p-6 md:p-8">
    <div class="max-w-lg mx-auto bg-gray-200 p-4 sm:p-6 rounded-lg shadow-lg">
      <form>
        <!-- Griglia responsiva -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <!-- Nome -->
          <div class="mb-4">
            <label for="nome" class="block text-gray-700 font-medium mb-2"
              >Nome</label
            >
            <input
              type="text"
              id="nome"
              name="nome"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <!-- Cognome -->
          <div class="mb-4">
            <label for="cognome" class="block text-gray-700 font-medium mb-2"
              >Cognome</label
            >
            <input
              type="text"
              id="cognome"
              name="cognome"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-4 col-span-1 sm:col-span-2">
            <label for="email" class="block text-gray-700 font-medium mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <!-- Messaggio -->
          <div class="mb-6 col-span-1 sm:col-span-2">
            <label for="messaggio" class="block text-gray-700 font-medium mb-2"
              >Messaggio</label
            >
            <textarea
              id="messaggio"
              name="messaggio"
              rows="5"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            ></textarea>
          </div>
        </div>

        <!-- Bottone -->
        <div class="text-center">
          <button
            type="submit"
            class="px-6 py-3 bg-blue-300 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto"
          >
            Invia Messaggio
          </button>
        </div>
      </form>
    </div>
  </section> `,
  styles: ``,
})
export class ContactComponent {}
