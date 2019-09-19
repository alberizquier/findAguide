import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGuideListComponent } from './users-guide-list.component';

describe('UsersGuideListComponent', () => {
  let component: UsersGuideListComponent;
  let fixture: ComponentFixture<UsersGuideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersGuideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGuideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
