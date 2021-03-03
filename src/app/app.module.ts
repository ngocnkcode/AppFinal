import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { CollectionComponent } from './page/collection/collection.component';
import { DetailComponent } from './page/detail/detail.component';
import { ContactComponent } from './page/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactTestComponent } from './page/contact-test/contact-test.component';
import { HomeTitlePipe } from './Pipes/home-title.pipe';
import { ErrorComponent } from "./page/error/error.component";
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { CartComponent } from './page/cart/cart.component';
import { AccountComponent } from './page/account/account.component';
import { AccountOrderComponent } from './page/account-order/account-order.component';
import { OrderDetailComponent } from './page/order-detail/order-detail.component';
import { SearchComponent } from './page/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CollectionComponent,
    DetailComponent,
    ContactComponent,
    ContactTestComponent,
    HomeTitlePipe,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    AccountComponent,
    AccountOrderComponent,
    OrderDetailComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
