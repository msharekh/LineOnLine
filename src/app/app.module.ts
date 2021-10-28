import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; //for http

import { HomeComponent } from './home';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ProductComponent } from './product/product.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
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
import { CustomerComponent } from './components/customer/customer.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { UserComponent } from './components/user/user.component';
import { OptionComponent } from './components/option/option.component';
import { SelectionComponent } from './components/selection/selection.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import { AddRestaurantComponent } from './components/restaurant/add-restaurant/add-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    RestaurantComponent,
    ProductComponent,
    CuisineComponent,
    PostComponent,
    CustomerComponent,
    ItemComponent,
    CartComponent,
    OrderComponent,
    InvoiceComponent,
    UserComponent,
    OptionComponent,
    SelectionComponent,

    CreateCategoryComponent,
    ListCategoryComponent,
    InfoComponent,
    AddRestaurantComponent
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
    MatProgressSpinnerModule,

    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
