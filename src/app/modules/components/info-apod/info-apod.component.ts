import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { NasaService } from '../../../core/services/nasa.service';

@Component({
  selector: 'app-info-apod',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './info-apod.component.html',
})
export class InfoApodComponent {
  @Input() date!: string;
  public apodData: any;
  public apodSkeleton = [1, 2, 3, 4, 5, 6];
  public isLoading: boolean = true;

  constructor(private nasaService: NasaService, private router: Router) {}

  navigate() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    if (!this.date) {
      this.nasaService.getAPOD().subscribe((data) => {
        this.apodData = data;
        this.isLoading = false;
      });
    } else {
      this.nasaService.getAPODByDate(this.date).subscribe((data) => {
        this.apodData = data;
        this.isLoading = false;
      });
    }
  }
}
