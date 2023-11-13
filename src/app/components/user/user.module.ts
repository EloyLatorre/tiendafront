import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserDetailUnroutedComponent } from './admin-user-detail-unrouted/admin-user-detail-unrouted.component';
import { AdminUserEditRoutedComponent } from './admin-user-edit-routed/admin-user-edit-routed.component';
import { AdminUserFormUnroutedComponent } from './admin-user-form-unrouted/admin-user-form-unrouted.component';
import { AdminUserNewRoutedComponent } from './admin-user-new-routed/admin-user-new-routed.component';
import { AdminUserPlistRoutedComponent } from './admin-user-plist-routed/admin-user-plist-routed.component';
import { AdminUserPlistUnroutedComponent } from './admin-user-plist-unrouted/admin-user-plist-unrouted.component';
import { AdminUserSelectionUnroutedComponent } from './admin-user-selection-unrouted/admin-user-selection-unrouted.component';
import { AdminUserViewRoutedComponent } from './admin-user-view-routed/admin-user-view-routed.component';



@NgModule({
  declarations: [
    AdminUserDetailUnroutedComponent,
    AdminUserEditRoutedComponent,
    AdminUserFormUnroutedComponent,
    AdminUserNewRoutedComponent,
    AdminUserPlistRoutedComponent,
    AdminUserPlistUnroutedComponent,
    AdminUserSelectionUnroutedComponent,
    AdminUserViewRoutedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
