import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraSelectionUnroutedComponent } from './admin-compra-selection-unrouted.component';

describe('AdminCompraSelectionUnroutedComponent', () => {
  let component: AdminCompraSelectionUnroutedComponent;
  let fixture: ComponentFixture<AdminCompraSelectionUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraSelectionUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraSelectionUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
