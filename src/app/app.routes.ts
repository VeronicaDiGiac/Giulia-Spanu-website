import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'chi-sono',
    loadComponent: () =>
      import('./components/chi-sono-section/chi-sono-section.component').then(
        (m) => m.ChiSonoSectionComponent
      ),
  },
  {
    path: 'servizi',
    loadComponent: () =>
      import('./components/servizi-section/servizi-section.component').then(
        (m) => m.ServiziSectionComponent
      ),
  },
  {
    path: 'articoli',
    loadComponent: () =>
      import('./components/articoli-section/articoli-section.component').then(
        (m) => m.ArticoliSectionComponent
      ),
  },
  {
    path: 'contatti',
    loadComponent: () =>
      import('./components/contatti-section/contatti-section.component').then(
        (m) => m.ContattiSectionComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
