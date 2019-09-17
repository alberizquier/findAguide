import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderBudgetComponent } from './guider-budget.component';

describe('GuiderBudgetComponent', () => {
  let component: GuiderBudgetComponent;
  let fixture: ComponentFixture<GuiderBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
