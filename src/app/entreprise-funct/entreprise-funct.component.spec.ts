import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseFunctComponent } from './entreprise-funct.component';

describe('EntrepriseFunctComponent', () => {
  let component: EntrepriseFunctComponent;
  let fixture: ComponentFixture<EntrepriseFunctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseFunctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseFunctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
