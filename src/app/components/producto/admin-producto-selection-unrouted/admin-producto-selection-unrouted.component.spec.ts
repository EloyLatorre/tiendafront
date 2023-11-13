import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoSelectionUnroutedComponent } from './admin-producto-selection-unrouted.component';

describe('AdminProductoSelectionUnroutedComponent', () => {
  let component: AdminProductoSelectionUnroutedComponent;
  let fixture: ComponentFixture<AdminProductoSelectionUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoSelectionUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoSelectionUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
