import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { MenuPage } from './menu/menu.page';
import { ListOfGroceryPage } from './list-of-grocery/list-of-grocery.page';
import { AddGroceryPage } from './add-grocery/add-grocery.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    //loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
    component:DashboardPage
  },
  {
    path: 'menu',
    //loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
    component:MenuPage
  },
  {
    path: 'list-of-grocery',
    // loadChildren: () => import('./list-of-grocery/list-of-grocery.module').then( m => m.ListOfGroceryPageModule)
    component:ListOfGroceryPage
  },
  {
    path: 'add-grocery',
    // loadChildren: () => import('./add-grocery/add-grocery.module').then( m => m.AddGroceryPageModule)
    component:AddGroceryPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
