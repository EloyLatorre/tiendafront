import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoEditRoutedComponent } from './admin-producto-edit-routed.component';

describe('AdminProductoEditRoutedComponent', () => {
  let component: AdminProductoEditRoutedComponent;
  let fixture: ComponentFixture<AdminProductoEditRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoEditRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
