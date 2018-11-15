import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreService} from './services/store/store.service';
import {RegistrationService} from './services/registration/registration.service';
import {FormControl, FormsModule} from '@angular/forms';
import { OpenModalComponent } from './modals/open-modal/open-modal.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import {RouterModule} from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import {CategoryService} from './services/category/category.service';
import { ShopingPageComponent } from './components/shoping-page/shoping-page.component';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';


@NgModule({
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    OpenModalComponent,
    ProductsComponent,
    CategoryComponent,
    ShopingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    ModalModule.forRoot(),
    NgbModule,
    NgbModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    CommonModule,

  ],
  providers: [StoreService, RegistrationService, CategoryService, BsModalService],
  entryComponents: [OpenModalComponent, ProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
