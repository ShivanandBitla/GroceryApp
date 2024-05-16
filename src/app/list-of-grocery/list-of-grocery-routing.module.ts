import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfGroceryPage } from './list-of-grocery.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfGroceryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfGroceryPageRoutingModule {}
