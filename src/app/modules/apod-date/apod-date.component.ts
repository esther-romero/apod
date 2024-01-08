import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { NasaService } from '../../core/services/nasa.service';
import { InfoApodComponent } from '../components/info-apod/info-apod.component';
@Component({
  selector: 'app-apod-date',
  standalone: true,
  imports: [RouterLink, InfoApodComponent],
  templateUrl: './apod-date.component.html',
  styleUrl: './apod-date.component.css',
})
export class ApodDateComponent {
  selectedDate: string = '';
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
  years: number[] = [];
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  days: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  constructor(private nasaService: NasaService, private router: Router) {
    this.selectedYear = 2024;
    this.selectedMonth = 1;
    this.selectedDay = 1;
  }

  navigate() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const startYear = 1995;

    for (let year = currentYear; year >= startYear; year--) {
      this.years.push(year);
    }
  }

  onChangeYear(event: any) {
    this.selectedYear = event.target.value;
  }

  onChangeMonth(event: any) {
    this.selectedMonth = event.target.value;
  }

  onChangeDay(event: any) {
    this.selectedDay = event.target.value;
  }

  onButtonClick() {
    this.selectedDate = `${this.selectedYear}-${this.selectedMonth}-${this.selectedDay}`;
    console.log(this.selectedDate);
  }

  navigateToInfoApod() {
    this.selectedDate = `${this.selectedYear}-${this.selectedMonth}-${this.selectedDay}`;
  }
}
