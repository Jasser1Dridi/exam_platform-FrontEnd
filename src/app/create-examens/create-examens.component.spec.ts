import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamensComponent } from './create-examens.component';

describe('CreateExamensComponent', () => {
  let component: CreateExamensComponent;
  let fixture: ComponentFixture<CreateExamensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
