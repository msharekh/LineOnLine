import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; //for http

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

import { PostsService } from './services/posts.service';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,

    RestaurantComponent,
    ProductComponent,
    CuisineComponent,
    AboutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,//for http
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
