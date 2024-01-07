import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'nasa-app';

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/apod']);
  }

  navigateDate() {
    this.router.navigate(['/apod-date']);
  }
}
