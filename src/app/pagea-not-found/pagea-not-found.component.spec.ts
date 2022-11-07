import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaNotFoundComponent } from './pagea-not-found.component';

describe('PageaNotFoundComponent', () => {
  let component: PageaNotFoundComponent;
  let fixture: ComponentFixture<PageaNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageaNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
