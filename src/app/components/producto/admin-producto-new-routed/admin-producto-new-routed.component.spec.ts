import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoNewRoutedComponent } from './admin-producto-new-routed.component';

describe('AdminProductoNewRoutedComponent', () => {
  let component: AdminProductoNewRoutedComponent;
  let fixture: ComponentFixture<AdminProductoNewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoNewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
