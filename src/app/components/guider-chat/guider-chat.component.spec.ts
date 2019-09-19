import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderChatComponent } from './guider-chat.component';

describe('GuiderChatComponent', () => {
  let component: GuiderChatComponent;
  let fixture: ComponentFixture<GuiderChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
