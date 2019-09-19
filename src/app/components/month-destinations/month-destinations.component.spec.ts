import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDestinationsComponent } from './month-destinations.component';

describe('MonthDestinationsComponent', () => {
  let component: MonthDestinationsComponent;
  let fixture: ComponentFixture<MonthDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
