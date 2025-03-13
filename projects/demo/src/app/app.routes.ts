import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
    title: 'Home|Angular Demo',
  },

  {
    path: 'films',
    loadComponent: () => import('./pages/films/films.component'),
    title: 'Films|Angular Demo',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
    title: 'About|Angular Demo',
  },
  { path: '**', redirectTo: 'home' },
];
