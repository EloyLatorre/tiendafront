import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraPlistRoutedComponent } from './admin-compra-plist-routed.component';

describe('AdminCompraPlistRoutedComponent', () => {
  let component: AdminCompraPlistRoutedComponent;
  let fixture: ComponentFixture<AdminCompraPlistRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompraPlistRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminCompraPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
