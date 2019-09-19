import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSuggestionsComponent } from './main-suggestions.component';

describe('MainSuggestionsComponent', () => {
  let component: MainSuggestionsComponent;
  let fixture: ComponentFixture<MainSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
