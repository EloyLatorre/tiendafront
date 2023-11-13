import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraFormUnroutedComponent } from './admin-compra-form-unrouted.component';

describe('AdminCompraFormUnroutedComponent', () => {
  let component: AdminCompraFormUnroutedComponent;
  let fixture: ComponentFixture<AdminCompraFormUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraFormUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
