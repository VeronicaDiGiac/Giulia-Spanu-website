import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziSectionComponent } from './servizi-section.component';

describe('ServiziSectionComponent', () => {
  let component: ServiziSectionComponent;
  let fixture: ComponentFixture<ServiziSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiziSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiziSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
