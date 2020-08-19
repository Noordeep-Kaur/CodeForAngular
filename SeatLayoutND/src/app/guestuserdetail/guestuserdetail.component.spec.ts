import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestuserdetailComponent } from './guestuserdetail.component';

describe('GuestuserdetailComponent', () => {
  let component: GuestuserdetailComponent;
  let fixture: ComponentFixture<GuestuserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestuserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestuserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
