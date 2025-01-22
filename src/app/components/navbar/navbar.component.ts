import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-slate-200  top-0 left-0 w-full z-10">
      <!-- fixed se vuoi la barra di menu fissa -->
      <div class="navbar">
        <div class="navbar-start w-full">
          <div class="dropdown">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost lg:hidden"
              (click)="toggleMenu()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <a class="btn btn-ghost text-xl" routerLink="home">Giulia Spanu</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li
              routerLink="chi-sono"
              class="text-lg hover:bg-blue-200 rounded-full"
            >
              <a>Chi sono</a>
            </li>
            <li
              routerLink="servizi"
              class="text-lg hover:bg-blue-200 rounded-full"
            >
              <a>Servizi</a>
            </li>
            <li
              routerLink="contatti"
              class="text-lg hover:bg-blue-200 rounded-full"
            >
              <a>Contatti</a>
            </li>
          </ul>
        </div>
      </div>
      <ul
        class="lg:hidden bg-slate-200 w-full transition-all duration-300"
        [class.max-h-0]="!isMenuOpen"
        [class.max-h-60]="isMenuOpen"
        [class.overflow-hidden]="!isMenuOpen"
      >
        <li class="border-b border-gray-300 p-3 text-center hover:bg-blue-100">
          <a routerLink="chi-sono">Chi sono</a>
        </li>
        <li class="border-b border-gray-300 p-3 text-center hover:bg-blue-100">
          <a routerLink="servizi">Servizi</a>
        </li>
        <li class="p-3 text-center hover:bg-blue-100">
          <a routerLink="contatti">Contatti</a>
        </li>
      </ul>
    </nav>
    <div
      [style.marginTop]="isMenuOpen ? '80px' : '60px'"
      class="transition-all duration-300"
    ></div>
  `,
  styles: [],
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
