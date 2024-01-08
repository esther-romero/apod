import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoApodComponent } from './info-apod.component';

describe('InfoApodComponent', () => {
  let component: InfoApodComponent;
  let fixture: ComponentFixture<InfoApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoApodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
