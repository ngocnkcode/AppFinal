import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountOrderComponent } from './page/account-order/account-order.component';
import { AccountComponent } from './page/account/account.component';
import { CartComponent } from './page/cart/cart.component';
import { CollectionComponent } from './page/collection/collection.component';
import { ContactTestComponent } from './page/contact-test/contact-test.component';
import { ContactComponent } from './page/contact/contact.component';
import { DetailComponent } from './page/detail/detail.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { OrderDetailComponent } from './page/order-detail/order-detail.component';
import { RegisterComponent } from './page/register/register.component';
import { SearchComponent } from './page/search/search.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"collection", component: CollectionComponent},
  {path:"detail/:id", component: DetailComponent},
  {path:"contact", component: ContactComponent},
  {path:"contacttest", component:ContactTestComponent},
  {path: "register", component:RegisterComponent},
  {path: "cart",component: CartComponent},
  {path: "login", component:LoginComponent},
  {path: "account",component:AccountComponent},
  {path: "order",component:AccountOrderComponent},
  {path: "order/:id",component:OrderDetailComponent},
  {path: "search/:search",component:SearchComponent},
  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
