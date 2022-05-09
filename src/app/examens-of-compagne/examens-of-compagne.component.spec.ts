import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensOfCompagneComponent } from './examens-of-compagne.component';

describe('ExamensOfCompagneComponent', () => {
  let component: ExamensOfCompagneComponent;
  let fixture: ComponentFixture<ExamensOfCompagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamensOfCompagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamensOfCompagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
