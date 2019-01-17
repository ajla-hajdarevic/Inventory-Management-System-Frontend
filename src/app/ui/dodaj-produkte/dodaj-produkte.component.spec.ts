import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajProdukteComponent } from './dodaj-produkte.component';

describe('DodajProdukteComponent', () => {
  let component: DodajProdukteComponent;
  let fixture: ComponentFixture<DodajProdukteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajProdukteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajProdukteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
