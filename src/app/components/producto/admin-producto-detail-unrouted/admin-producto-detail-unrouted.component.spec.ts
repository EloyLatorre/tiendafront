import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoDetailUnroutedComponent } from './admin-producto-detail-unrouted.component';

describe('AdminProductoDetailUnroutedComponent', () => {
  let component: AdminProductoDetailUnroutedComponent;
  let fixture: ComponentFixture<AdminProductoDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
