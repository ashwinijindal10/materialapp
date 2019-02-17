import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...OrdersRoutingModule.Components],
  imports: [
    SharedModule,
    OrdersRoutingModule,
    AngularMaterialModule
  ]
})
export class OrdersModule { }
