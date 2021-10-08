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
import { CustomerComponent } from './customer/customer.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UserComponent } from './user/user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OptionComponent } from './option/option.component';
import { SelectionComponent } from './selection/selection.component';
import { CreateCategoryComponent } from './category/create-category.component';
import { ListCategoryComponent } from './category/list-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';


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
    PostComponent,
    CustomerComponent,
    ItemComponent,
    CategoryComponent,
    CartComponent,
    OrderComponent,
    InvoiceComponent,
    UserComponent,
    SubscriptionComponent,
    OptionComponent,
    SelectionComponent,

    CreateCategoryComponent,
    ListCategoryComponent,
    InfoComponent
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

    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
