import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultClassementComponent } from './consult-classement.component';

describe('ConsultClassementComponent', () => {
  let component: ConsultClassementComponent;
  let fixture: ComponentFixture<ConsultClassementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultClassementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
