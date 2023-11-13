import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductoDetailUnroutedComponent } from './admin-producto-detail-unrouted/admin-producto-detail-unrouted.component';
import { AdminProductoEditRoutedComponent } from './admin-producto-edit-routed/admin-producto-edit-routed.component';
import { AdminProductoFormUnroutedComponent } from './admin-producto-form-unrouted/admin-producto-form-unrouted.component';
import { AdminProductoNewRoutedComponent } from './admin-producto-new-routed/admin-producto-new-routed.component';
import { AdminProductoPlistRoutedComponent } from './admin-producto-plist-routed/admin-producto-plist-routed.component';
import { AdminProductoPlistUnroutedComponent } from './admin-producto-plist-unrouted/admin-producto-plist-unrouted.component';
import { AdminProductoSelectionUnroutedComponent } from './admin-producto-selection-unrouted/admin-producto-selection-unrouted.component';
import { AdminProductoViewRoutedComponent } from './admin-producto-view-routed/admin-producto-view-routed.component';



@NgModule({
  declarations: [
    AdminProductoDetailUnroutedComponent,
    AdminProductoEditRoutedComponent,
    AdminProductoFormUnroutedComponent,
    AdminProductoNewRoutedComponent,
    AdminProductoPlistRoutedComponent,
    AdminProductoPlistUnroutedComponent,
    AdminProductoSelectionUnroutedComponent,
    AdminProductoViewRoutedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { }
