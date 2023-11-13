import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompraDetailUnroutedComponent } from './admin-compra-detail-unrouted/admin-compra-detail-unrouted.component';
import { AdminCompraEditRoutedComponent } from './admin-compra-edit-routed/admin-compra-edit-routed.component';
import { AdminCompraFormUnroutedComponent } from './admin-compra-form-unrouted/admin-compra-form-unrouted.component';
import { AdminCompraNewRoutedComponent } from './admin-compra-new-routed/admin-compra-new-routed.component';
import { AdminCompraPlistRoutedComponent } from './admin-compra-plist-routed/admin-compra-plist-routed.component';
import { AdminCompraPlistUnroutedComponent } from './admin-compra-plist-unrouted/admin-compra-plist-unrouted.component';
import { AdminCompraSelectionUnroutedComponent } from './admin-compra-selection-unrouted/admin-compra-selection-unrouted.component';
import { AdminCompraViewRoutedComponent } from './admin-compra-view-routed/admin-compra-view-routed.component';



@NgModule({
  declarations: [
    AdminCompraDetailUnroutedComponent,
    AdminCompraEditRoutedComponent,
    AdminCompraFormUnroutedComponent,
    AdminCompraNewRoutedComponent,
    AdminCompraPlistRoutedComponent,
    AdminCompraPlistUnroutedComponent,
    AdminCompraSelectionUnroutedComponent,
    AdminCompraViewRoutedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompraModule { }
