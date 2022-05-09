import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminedQuestionsComponent } from './examined-questions.component';

describe('ExaminedQuestionsComponent', () => {
  let component: ExaminedQuestionsComponent;
  let fixture: ComponentFixture<ExaminedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminedQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
