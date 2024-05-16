import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfGroceryPageRoutingModule } from './list-of-grocery-routing.module';

import { ListOfGroceryPage } from './list-of-grocery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfGroceryPageRoutingModule
  ],
  declarations: [ListOfGroceryPage]
})
export class ListOfGroceryPageModule {}
