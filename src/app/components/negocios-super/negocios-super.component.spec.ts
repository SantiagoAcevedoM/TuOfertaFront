import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociosSuperComponent } from './negocios-super.component';

describe('NegociosSuperComponent', () => {
  let component: NegociosSuperComponent;
  let fixture: ComponentFixture<NegociosSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociosSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociosSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
