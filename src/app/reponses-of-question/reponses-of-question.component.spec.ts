import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponsesOfQuestionComponent } from './reponses-of-question.component';

describe('ReponsesOfQuestionComponent', () => {
  let component: ReponsesOfQuestionComponent;
  let fixture: ComponentFixture<ReponsesOfQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponsesOfQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponsesOfQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
