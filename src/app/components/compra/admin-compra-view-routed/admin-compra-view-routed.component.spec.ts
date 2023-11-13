import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraViewRoutedComponent } from './admin-compra-view-routed.component';

describe('AdminCompraViewRoutedComponent', () => {
  let component: AdminCompraViewRoutedComponent;
  let fixture: ComponentFixture<AdminCompraViewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraViewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
