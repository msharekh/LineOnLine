import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { ProductComponent } from './product';
import { RestaurantComponent } from './components/restaurant';
import { CuisineComponent } from './components/cuisine/cuisine.component';

import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { InfoComponent } from './components/info/info.component';
import { AddRestaurantComponent } from './components/restaurant/add-restaurant/add-restaurant.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'product', component: ProductComponent },
    { path: 'product', component: ProductComponent },

    { path: 'restaurant', component: RestaurantComponent },
    { path: 'add-restaurant', component: AddRestaurantComponent },

    
    { path: 'cuisine', component: CuisineComponent },

    { path: 'about', component: AboutComponent },
    { path: 'post', component: PostComponent },

    { path: 'create-category', component: CreateCategoryComponent },
    { path: 'list-category', component: ListCategoryComponent },

    { path: 'info', component: InfoComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'add-restaurant' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
