import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraDetailUnroutedComponent } from './admin-compra-detail-unrouted.component';

describe('AdminCompraDetailUnroutedComponent', () => {
  let component: AdminCompraDetailUnroutedComponent;
  let fixture: ComponentFixture<AdminCompraDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
