import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {AppComponent} from './app.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {ShopingPageComponent} from './components/shoping-page/shoping-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: RegistrationPageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping',
    component: ShopingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
