import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderProfileComponent } from './guider-profile.component';

describe('GuiderProfileComponent', () => {
  let component: GuiderProfileComponent;
  let fixture: ComponentFixture<GuiderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
