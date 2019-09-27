import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat1Component } from './chat1.component';

describe('Chat1Component', () => {
  let component: Chat1Component;
  let fixture: ComponentFixture<Chat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
