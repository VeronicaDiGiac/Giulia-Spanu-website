import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSonoSectionComponent } from './chi-sono-section.component';

describe('ChiSonoSectionComponent', () => {
  let component: ChiSonoSectionComponent;
  let fixture: ComponentFixture<ChiSonoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiSonoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiSonoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
