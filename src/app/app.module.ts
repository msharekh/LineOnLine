import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,

    RestaurantComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
