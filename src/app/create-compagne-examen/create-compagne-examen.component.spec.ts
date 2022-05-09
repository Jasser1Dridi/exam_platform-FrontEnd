import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompagneExamenComponent } from './create-compagne-examen.component';

describe('CreateCompagneExamenComponent', () => {
  let component: CreateCompagneExamenComponent;
  let fixture: ComponentFixture<CreateCompagneExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompagneExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompagneExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
