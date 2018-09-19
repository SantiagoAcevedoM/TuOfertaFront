import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasSuperComponent } from './ofertas-super.component';

describe('OfertasSuperComponent', () => {
  let component: OfertasSuperComponent;
  let fixture: ComponentFixture<OfertasSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
