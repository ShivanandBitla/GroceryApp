import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardPage } from './dashboard/dashboard.page';
import { MenuPage } from './menu/menu.page';
import { ListOfGroceryPage } from './list-of-grocery/list-of-grocery.page';
import { AddGroceryPage } from './add-grocery/add-grocery.page';

@NgModule({
  declarations: [AppComponent,DashboardPage,MenuPage,ListOfGroceryPage,AddGroceryPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
