import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoViewRoutedComponent } from './admin-producto-view-routed.component';

describe('AdminProductoViewRoutedComponent', () => {
  let component: AdminProductoViewRoutedComponent;
  let fixture: ComponentFixture<AdminProductoViewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoViewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
