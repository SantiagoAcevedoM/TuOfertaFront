import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOffertModalComponent } from './edit-offert-modal.component';

describe('EditOffertModalComponent', () => {
  let component: EditOffertModalComponent;
  let fixture: ComponentFixture<EditOffertModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOffertModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOffertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
