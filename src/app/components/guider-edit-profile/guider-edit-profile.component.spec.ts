import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderEditProfileComponent } from './guider-edit-profile.component';

describe('GuiderEditProfileComponent', () => {
  let component: GuiderEditProfileComponent;
  let fixture: ComponentFixture<GuiderEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
