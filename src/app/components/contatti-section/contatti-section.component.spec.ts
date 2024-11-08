import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiSectionComponent } from './contatti-section.component';

describe('ContattiSectionComponent', () => {
  let component: ContattiSectionComponent;
  let fixture: ComponentFixture<ContattiSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContattiSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContattiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
