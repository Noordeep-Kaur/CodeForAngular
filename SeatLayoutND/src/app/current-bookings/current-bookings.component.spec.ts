import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBookingsComponent } from './current-bookings.component';

describe('CurrentBookingsComponent', () => {
  let component: CurrentBookingsComponent;
  let fixture: ComponentFixture<CurrentBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
