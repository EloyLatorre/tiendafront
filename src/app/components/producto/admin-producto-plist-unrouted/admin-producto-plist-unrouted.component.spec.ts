import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoPlistUnroutedComponent } from './admin-producto-plist-unrouted.component';

describe('AdminProductoPlistUnroutedComponent', () => {
  let component: AdminProductoPlistUnroutedComponent;
  let fixture: ComponentFixture<AdminProductoPlistUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductoPlistUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminProductoPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
