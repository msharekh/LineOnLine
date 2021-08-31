import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { ProductComponent } from './product/product.component';
import { CuisineComponent } from './cuisine/cuisine.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,

    RestaurantComponent,
    ProductComponent,
    CuisineComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
