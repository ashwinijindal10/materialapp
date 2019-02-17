import { NgModule } from '@angular/core';
import { CustomersRoutingModule } from './customers-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

@NgModule({
  declarations: [...CustomersRoutingModule.Components, RepDialogComponent],
  imports: [
    SharedModule,
    CustomersRoutingModule,
    AngularMaterialModule
  ],
  entryComponents:[RepDialogComponent]
})
export class CustomersModule { }
