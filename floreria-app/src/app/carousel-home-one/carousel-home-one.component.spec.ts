import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHomeOneComponent } from './carousel-home-one.component';

describe('CarouselHomeOneComponent', () => {
  let component: CarouselHomeOneComponent;
  let fixture: ComponentFixture<CarouselHomeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselHomeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHomeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
