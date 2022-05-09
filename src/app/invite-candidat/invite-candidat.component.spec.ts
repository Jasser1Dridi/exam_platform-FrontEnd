import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCandidatComponent } from './invite-candidat.component';

describe('InviteCandidatComponent', () => {
  let component: InviteCandidatComponent;
  let fixture: ComponentFixture<InviteCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
