import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSpaceComponent } from './enterprise-space.component';

describe('EnterpriseSpaceComponent', () => {
  let component: EnterpriseSpaceComponent;
  let fixture: ComponentFixture<EnterpriseSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
