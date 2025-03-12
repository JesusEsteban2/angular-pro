import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },

  {
    path: 'films',
    loadComponent: () => import('./pages/films/films.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  { path: '**', redirectTo: 'home' },
];
