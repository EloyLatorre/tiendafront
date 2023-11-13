import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraPlistUnroutedComponent } from './admin-compra-plist-unrouted.component';

describe('AdminCompraPlistUnroutedComponent', () => {
  let component: AdminCompraPlistUnroutedComponent;
  let fixture: ComponentFixture<AdminCompraPlistUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraPlistUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
