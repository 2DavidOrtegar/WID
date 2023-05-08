import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ProductGridComponent } from './ecommerce/product-grid/product-grid.component';
import { ProductDetailComponent } from './ecommerce/product-detail/product-detail.component';
import { CartPayComponent } from './ecommerce/cart-pay/cart-pay.component';
import { LoginComponent } from './login/login/login.component';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { RegisterComponent } from './login/register/register.component';
import { InfoUserComponent } from './user/info-user/info-user.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductGridComponent,
    ProductDetailComponent,
    CartPayComponent,
    LoginComponent,
    ForgotPassComponent,
    RegisterComponent,
    InfoUserComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
