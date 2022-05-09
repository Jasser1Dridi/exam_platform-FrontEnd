import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsOfExamenComponent } from './questions-of-examen.component';

describe('QuestionsOfExamenComponent', () => {
  let component: QuestionsOfExamenComponent;
  let fixture: ComponentFixture<QuestionsOfExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsOfExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsOfExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
