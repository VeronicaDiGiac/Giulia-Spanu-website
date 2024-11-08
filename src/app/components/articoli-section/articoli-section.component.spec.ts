import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoliSectionComponent } from './articoli-section.component';

describe('ArticoliSectionComponent', () => {
  let component: ArticoliSectionComponent;
  let fixture: ComponentFixture<ArticoliSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticoliSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticoliSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
