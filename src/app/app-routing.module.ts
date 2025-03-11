import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:"product-list",component:ProductlistComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"", redirectTo :"product-list",pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

