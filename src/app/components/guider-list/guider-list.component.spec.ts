import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderListComponent } from './guider-list.component';

describe('GuiderListComponent', () => {
  let component: GuiderListComponent;
  let fixture: ComponentFixture<GuiderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
