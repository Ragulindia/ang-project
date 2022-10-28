import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Companant1Component } from './companant1.component';

describe('Companant1Component', () => {
  let component: Companant1Component;
  let fixture: ComponentFixture<Companant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Companant1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Companant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
