import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselgalleryComponent } from './carouselgallery.component';

describe('CarouselgalleryComponent', () => {
  let component: CarouselgalleryComponent;
  let fixture: ComponentFixture<CarouselgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
