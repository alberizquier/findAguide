import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSupComponent } from './nav-bar-sup.component';

describe('NavBarSupComponent', () => {
  let component: NavBarSupComponent;
  let fixture: ComponentFixture<NavBarSupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarSupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
