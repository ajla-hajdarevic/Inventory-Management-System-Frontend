import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesFormComponent } from './sales-form.component';
import {describe, expect} from "@angular/core/testing/src/testing_internal";

describe('SalesFormComponent', () => {
  let component: SalesFormComponent;
  let fixture: ComponentFixture<SalesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
