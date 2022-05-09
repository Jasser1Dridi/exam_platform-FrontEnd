import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpaceCandidatEditComponent } from './admin-space-candidat-edit.component';

describe('AdminSpaceCandidatEditComponent', () => {
  let component: AdminSpaceCandidatEditComponent;
  let fixture: ComponentFixture<AdminSpaceCandidatEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpaceCandidatEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpaceCandidatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
