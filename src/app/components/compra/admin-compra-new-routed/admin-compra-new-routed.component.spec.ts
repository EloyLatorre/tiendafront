import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraNewRoutedComponent } from './admin-compra-new-routed.component';

describe('AdminCompraNewRoutedComponent', () => {
  let component: AdminCompraNewRoutedComponent;
  let fixture: ComponentFixture<AdminCompraNewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraNewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
