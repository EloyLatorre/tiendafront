import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraEditRoutedComponent } from './admin-compra-edit-routed.component';

describe('AdminCompraEditRoutedComponent', () => {
  let component: AdminCompraEditRoutedComponent;
  let fixture: ComponentFixture<AdminCompraEditRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraEditRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
