import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

import { NasaService } from '../../core/services/nasa.service';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css',
})
export class ApodComponent {
  apodData: any;
  images: any[] = [];
  selectedDate: string = '';

  constructor(private nasaService: NasaService, private router: Router) {}

  navigate() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.nasaService.getAPOD().subscribe((data) => {
      this.apodData = data;
      console.log(this.apodData);
    });

    // this.selectedDate = '2004-08-06T12:58:00Z';
    // this.nasaService.getImagesByDate(this.selectedDate).subscribe((data) => {
    //   this.images = data.collection.items;
    // });
  }
}
