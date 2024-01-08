import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { NasaService } from '../../../core/services/nasa.service';

@Component({
  selector: 'app-info-apod',
  standalone: true,
  imports: [],
  templateUrl: './info-apod.component.html',
})
export class InfoApodComponent {
  @Input() date!: string;
  apodData: any;

  constructor(private nasaService: NasaService, private router: Router) {}

  navigate() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    if (!this.date) {
      this.nasaService.getAPOD().subscribe((data) => {
        this.apodData = data;
      });
    } else {
      this.nasaService.getAPODByDate(this.date).subscribe((data) => {
        this.apodData = data;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.nasaService.getAPODByDate(this.date).subscribe((data) => {
      this.apodData = data;
    });
  }
}
