import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpaceCandidatComponent } from './admin-space-candidat.component';

describe('AdminSpaceCandidatComponent', () => {
  let component: AdminSpaceCandidatComponent;
  let fixture: ComponentFixture<AdminSpaceCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpaceCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpaceCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
