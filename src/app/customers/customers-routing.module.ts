import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
  {path:'' , component :CustomerListComponent},
  {path:'info' , component :CustomerInfoComponent},
  {path:'new' , component :CustomerNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { 
  public static Components=[
    CustomerListComponent,
    CustomerInfoComponent,
    CustomerNewComponent
  ]
}
