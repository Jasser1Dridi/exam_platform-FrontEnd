import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpaceQuestionsEditComponent } from './admin-space-questions-edit.component';

describe('AdminSpaceQuestionsEditComponent', () => {
  let component: AdminSpaceQuestionsEditComponent;
  let fixture: ComponentFixture<AdminSpaceQuestionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpaceQuestionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpaceQuestionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
