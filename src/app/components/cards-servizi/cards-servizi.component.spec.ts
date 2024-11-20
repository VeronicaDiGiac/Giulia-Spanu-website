import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsServiziComponent } from './cards-servizi.component';

describe('CardsServiziComponent', () => {
  let component: CardsServiziComponent;
  let fixture: ComponentFixture<CardsServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsServiziComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsServiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
