import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { ProductComponent } from './product';
import { RestaurantComponent } from './restaurant';
import { CuisineComponent } from './cuisine/cuisine.component';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'product', component: ProductComponent },
    { path: 'product', component: ProductComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'cuisine', component: CuisineComponent },
    
    { path: 'about', component: AboutComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);