import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { InfoApodComponent } from '../components/info-apod/info-apod.component';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [RouterLink, InfoApodComponent],
  templateUrl: './apod.component.html',
})
export class ApodComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/']);
  }
}
