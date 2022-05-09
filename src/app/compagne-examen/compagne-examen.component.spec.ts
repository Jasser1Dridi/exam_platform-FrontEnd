import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagneExamenComponent } from './compagne-examen.component';

describe('CompagneExamenComponent', () => {
  let component: CompagneExamenComponent;
  let fixture: ComponentFixture<CompagneExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagneExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagneExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
