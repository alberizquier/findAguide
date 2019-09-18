import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderBudgetHistoricComponent } from './guider-budget-historic.component';

describe('GuiderBudgetHistoricComponent', () => {
  let component: GuiderBudgetHistoricComponent;
  let fixture: ComponentFixture<GuiderBudgetHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderBudgetHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderBudgetHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
