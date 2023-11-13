import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoPlistRoutedComponent } from './admin-producto-plist-routed.component';

describe('AdminProductoPlistRoutedComponent', () => {
  let component: AdminProductoPlistRoutedComponent;
  let fixture: ComponentFixture<AdminProductoPlistRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoPlistRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
