import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../core/services/nasa.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  apodData: any;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getAPOD().subscribe((data) => {
      this.apodData = data;
    });
  }
}
