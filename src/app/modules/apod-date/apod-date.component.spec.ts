import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodDateComponent } from './apod-date.component';

describe('ApodDateComponent', () => {
  let component: ApodDateComponent;
  let fixture: ComponentFixture<ApodDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApodDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
