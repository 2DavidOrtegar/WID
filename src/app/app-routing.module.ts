import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductGridComponent } from './ecommerce/product-grid/product-grid.component';
import { ProductDetailComponent } from './ecommerce/product-detail/product-detail.component';
import { CartPayComponent } from './ecommerce/cart-pay/cart-pay.component';
import { LoginComponent } from './login/login/login.component';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { RegisterComponent } from './login/register/register.component';
import { InfoUserComponent } from './user/info-user/info-user.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  { path: 'product-grid', component: ProductGridComponent },
  { path: 'product-details', component: ProductDetailComponent },
  { path: 'cart-pay', component: CartPayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-pass', component: ForgotPassComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'info-user', component: InfoUserComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
