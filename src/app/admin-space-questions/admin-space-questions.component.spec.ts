import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpaceQuestionsComponent } from './admin-space-questions.component';

describe('AdminSpaceQuestionsComponent', () => {
  let component: AdminSpaceQuestionsComponent;
  let fixture: ComponentFixture<AdminSpaceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpaceQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpaceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
