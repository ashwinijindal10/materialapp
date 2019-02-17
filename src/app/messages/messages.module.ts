import { NgModule } from '@angular/core';
import { MessagesRoutingModule } from './messages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [...MessagesRoutingModule.Modules],
  imports: [
    SharedModule,
    MessagesRoutingModule,
    AngularMaterialModule
  ]
})
export class MessagesModule { }
