import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'films',
    loadComponent: () => import('./pages/films/films.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/home/home.component'),
  },
];
