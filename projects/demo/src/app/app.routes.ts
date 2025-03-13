import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
    title: 'Home|Angular Demo',
    data: { label: 'Home' },
  },

  {
    path: 'films',
    loadComponent: () => import('./pages/films/films.component'),
    title: 'Films|Angular Demo',
    data: { label: 'Films' },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
    title: 'About|Angular Demo',
    data: { label: 'About' },
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
    title: 'Login|Angular Demo',
    data: { label: 'Login' },
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component'),
    title: 'Register|Angular Demo',
    data: { label: 'Register' },
  },
  { path: '**', redirectTo: 'home' },
];
