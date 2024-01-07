import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { NasaService } from '../../core/services/nasa.service';

@Component({
  selector: 'app-apod-date',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apod-date.component.html',
  styleUrl: './apod-date.component.css',
})
export class ApodDateComponent {
  selectedDate: string = '';

  constructor(private nasaService: NasaService, private router: Router) {}

  navigate() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.selectedDate = '2002-01-17T12:58:00Z';
    this.nasaService.getAPODByDate(this.selectedDate).subscribe((data) => {
      this.selectedDate = data;
      console.log(this.selectedDate);
    });
  }
}
