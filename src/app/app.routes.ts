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
      import('./modules/apod/apod.component').then((m) => m.ApodComponent),
  },
  {
    path: 'apod-date',
    loadComponent: () =>
      import('./modules/apod-date/apod-date.component').then(
        (m) => m.ApodDateComponent
      ),
  },
];
