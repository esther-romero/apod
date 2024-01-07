import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'nasa-app';
  public selectValue: FormControl;
  public searchValue: FormControl;

  constructor(private router: Router) {
    this.selectValue = new FormControl('');
    this.searchValue = new FormControl('');
    this.router.navigate(this.router.url.split('/'));
  }

  navigate() {
    if (this.selectValue.value !== '') {
      this.router.navigate(['home', this.selectValue.value]);
    } else this.router.navigate(['home']);
  }
}
