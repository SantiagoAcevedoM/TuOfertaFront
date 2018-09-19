import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNegComponent } from './crear-neg.component';

describe('CrearNegComponent', () => {
  let component: CrearNegComponent;
  let fixture: ComponentFixture<CrearNegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearNegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
