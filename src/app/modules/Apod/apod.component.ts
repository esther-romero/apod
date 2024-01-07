import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { NasaService } from '../../core/services/nasa.service';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apod.component.html',
})
export class ApodComponent {
  apodData: any;

  constructor(private nasaService: NasaService, private router: Router) {}

  navigate() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.nasaService.getAPOD().subscribe((data) => {
      this.apodData = data;
      console.log(this.apodData);
    });
  }
}
