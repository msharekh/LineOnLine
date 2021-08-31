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
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,

    RestaurantComponent,
    ProductComponent,
    CuisineComponent,
    AboutComponent
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
