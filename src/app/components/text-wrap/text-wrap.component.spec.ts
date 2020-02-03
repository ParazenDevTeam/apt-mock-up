import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWrapComponent } from './text-wrap.component';

describe('TextWrapComponent', () => {
  let component: TextWrapComponent;
  let fixture: ComponentFixture<TextWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
