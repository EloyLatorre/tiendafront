import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoFormUnroutedComponent } from './admin-producto-form-unrouted.component';

describe('AdminProductoFormUnroutedComponent', () => {
  let component: AdminProductoFormUnroutedComponent;
  let fixture: ComponentFixture<AdminProductoFormUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoFormUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
