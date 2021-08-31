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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';

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
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
