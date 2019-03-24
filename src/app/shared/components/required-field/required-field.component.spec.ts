import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredFieldComponent } from './required-field.component';

describe('RequiredFieldComponent', () => {
  let component: RequiredFieldComponent;
  let fixture: ComponentFixture<RequiredFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
