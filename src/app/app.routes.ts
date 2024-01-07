import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'apod',
    loadComponent: () =>
      import('./modules/Apod/apod.component').then((m) => m.ApodComponent),
  },
];
