# LineOnLine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

Angular CLI: 8.0.6
Node: 10.13.0
OS: darwin x64
Angular: 8.0.3

## Setup
- to install  `sudo npm i -g @angular/cli@8.0.3`
- to check  `ng version`

## Development server

npm install -g @angular/cli

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

`ng serve --open`

`npm run server`

## Angular 12 + Node js Express + MySQL CRUD

Step 1 – Create RESTful API with Node js + Express + MySQL
Step 2 – Create New Angular App
Step 3 – Create Components in Angular
Step 4 – Import Modules in app.module.ts
Step 5 – Create CRUD Routes
Step 6 – Create Angular Service for REST API Consumption
Step 7 – Add code In app.component.html
Step 8 – Create Operation

### USER

#### create node js express

```
mkdir node-rest-crud-api
 cd node-rest-crud-api
```

> TODO:initialize #15 node js + express app

```
npm init --yes

npm install
```

> TODO: #16 Install express js framework and MySQL driver with NPM

```
npm install express --save
 npm install mysql --save
 npm install body-parser --save
```

> TODO: #17 Create database and table for perform crud operation

- Table structure for users

```TypeScript 
let m
```

```SQL
   CREATE TABLE IF NOT EXISTS users (
    id int(11) NOT NULL,
    name varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  ALTER TABLE users ADD PRIMARY KEY (id);
  ALTER TABLE users MODIFY id int(11) NOT NULL AUTO_INCREMENT;
```

- Insert data into database :

```SQL
INSERT INTO users (id, name, email, created_at) VALUES
  (1, 'Test', 'test@g.co', '2019-02-28 13:20:20'),
  (2, 'john', 'john@g.co', '2019-02-28 13:20:20'),
  (3, 'tus', 'tuts@g.co', '2019-02-28 13:20:20'),
  (4, 'tut', 'tut@g.co', '2019-02-28 13:20:20'),
  (5, 'mhd', 'mhd@g.co', '2019-02-28 13:20:20');

```

- TODO: #18 Create server.js file

```JS
/* 1- require  :
  1. express
  2. body-parser
  3. mysql
  */
var express = require('express');

var bodyParser = require('body-parser');

var mysql = require('mysql');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({

//X- hello home

app.get('/', function (req, res) {

return res.send({ error: true, message: 'hello' })

/* 2- Create database connection for create, read, update and delete data into database */

// connection configurations

var dbConn = mysql.createConnection({

database: 'node_js_api'


// A- Retrieve all users

app.get('/users', function (req, res) {

dbConn.query('SELECT * FROM users', function (error, results, fields) {

if (error) throw error;

return res.send({ error: false, data: results, message: 'users list.' });

// B- Retrieve user with id

app.get('/read-user/:id', function (req, res) {

let user_id = req.params.id;

return res.status(400).send({ error: true, message: 'Please provide user_id' });

dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {

if (error) throw error;

return res.send({ error: false, data: results[0], message: 'users list.' });

// C- Add user

app.post('/add-user', function (req, res) {

let user = req.body.user;

return res.status(400).send({ error:true, message: 'Please provide user' });

dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {

if (error) throw error;

return res.send({ error: false, data: results, message: 'New user has been created successfully.' });

// D- Update user with id

app.put('/update-user', function (req, res) {

let user_id = req.body.user_id;

let user = req.body.user;

if (!user_id || !user) {

return res.status(400).send({ error: user, message: 'Please provide user and user_id' });

dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {

if (error) throw error;

return res.send({ error: false, data: results, message: 'user has been updated successfully.' });

// E- Delete user with id

app.delete('/delete-user', function (req, res) {

let user_id = req.body.user_id;

return res.status(400).send({ error: true, message: 'Please provide user_id' });

dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {

if (error) throw error;

return res.send({ error: false, data: results, message: 'User has been updated successfully.' });


// 0- Listen

app.listen(3000, function () {

console.log('Node app is running on port 3000');
```

#### Step 2 – Create New Angular App

> install angular app:

```
ng new my-new-app
```

> install angular material:

```
ng add @angular/material
```

#### Step 3 – Create Components in Angular

TODO: #19 CREATE COMPONENTS OF USER @msharekh

```
ng g c components/add-user
ng g c components/detail-detail
ng g c components/users-list

ng g c components/restaurant/add-restaurant --flat


```

#### Step 4 – Import Modules in app.module.ts

> open app.module.ts file

- FormsModule
- ReactiveFormsModule

import FormsModule into not only the root AppModule, but also into every subModule that uses any angular forms directives.

```JS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

export class AppModule { }
```

#### Step 5 – Create CRUD Routes

> TODO: #20 Create routes - routing.module.ts file @msharekh:

- NgModule
- Routes
- RouterModule
- UsersListComponent
- AddUserComponent
- UserDetailComponent
-

```JS
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';

import { AddUserComponent } from './components/add-user/add-user.component';

import { UserDetailComponent } from './components/user-detail/user-detail.component';

{ path: '', pathMatch: 'full', redirectTo: 'add-user' },

{ path: 'users-list', component: UsersListComponent },

{ path: 'add-user', component: AddUserComponent },

{ path: 'edit-user/:id', component: UserDetailComponent }

imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]

export class AppRoutingModule { }
```

#### Step 6 – Create Angular Service for REST API Consumption

> TODO: #21 go to app/service directory in Angular project and create User.ts class

```
ng g s service/crud
```

> TODO: add the below code in app/service/crud.service.ts file

- Injectable
- User
- catchError
- map
- Observable
- throwError
- HttpClient
- HttpHeaders
- HttpErrorResponse

```JS
import { Injectable } from '@angular/core';

import { User } from './User';

import { catchError, map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class CrudService {

REST_API: string = 'http://localhost:3000/';

httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private httpClient: HttpClient) { }

AddUser(data: User): Observable<any> {

let API_URL = `${this.REST_API}/add-user`;

return this.httpClient.post(API_URL, data)

catchError(this.handleError)

return this.httpClient.get(`${this.REST_API}/users`);

GetUser(id:any): Observable<any> {

let API_URL = `${this.REST_API}/read-user/${id}`;

return this.httpClient.get(API_URL, { headers: this.httpHeaders })

.pipe(map((res: any) => {

return res || {}

catchError(this.handleError)

updateUser(id:any, data:any): Observable<any> {

let API_URL = `${this.REST_API}/update-user/${id}`;

return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })

catchError(this.handleError)

deleteUser(id:any): Observable<any> {

let API_URL = `${this.REST_API}/delete-user/${id}`;

return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(

catchError(this.handleError)

handleError(error: HttpErrorResponse) {

let errorMessage = '';

if (error.error instanceof ErrorEvent) {

// Handle client error

errorMessage = error.error.message;

// Handle server error

errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

console.log(errorMessage);

return throwError(errorMessage);
```

#### Step 7 – Add code In app.component.html

> TODO: src/app/app.component.html

```HTML
<nav class="navbar navbar-expand-lg navbar-light bg-light">

<a class="navbar-brand">Angular 12 CRUD Operations with node js express + mysql Demo</a>

<div id="navbarNav" class="collapse navbar-collapse">

<ul class="navbar-nav ml-auto ">

<li class="nav-item">

<a class="nav-link" routerLinkActive="active" routerLink="/users-list">Show Users</a>

<li class="nav-item">

<a class="nav-link" routerLinkActive="active" routerLink="/add-user">Add User</a>

<router-outlet></router-outlet>

```

#### Step 8 – Create Operation

> TODO: Add the code in add-user.component.ts

- Component
- OnInit
- NgZone
- Router
- CrudService
- FormGroup
- FormBuilder

```JS
import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';

import { CrudService } from './../../service/crud.service';

import { FormGroup, FormBuilder } from "@angular/forms";

selector: 'app-add-user',

templateUrl: './add-user.component.html',

styleUrls: ['./add-user.component.scss']

export class AddUserComponent implements OnInit {

public formBuilder: FormBuilder,

private router: Router,

private ngZone: NgZone,

private crudService: CrudService

this.userForm = this.formBuilder.group({

this.crudService.AddUser(this.userForm.value)

console.log('User added successfully!')

this.ngZone.run(() => this.router.navigateByUrl('/users-list'))

console.log(err);
```

> TODO: Then, Add the code in add-user.component.html file:

```HTML
<div class="row justify-content-center mt-5">

<div class="col-md-4">

<form [formGroup]="userForm" (ngSubmit)="onSubmit()">

<div class="form-group">

<label>Name</label>

<input class="form-control" type="text" formControlName="name" required>

<div class="form-group">

<label>Email</label>

<input class="form-control" type="email" formControlName="email" required>

<div class="form-group">

<button class="btn btn-primary btn-block" type="submit">Add User</button>
```

> TODO: Add the code in users-list.component.ts file:

//TODO: #14 Add the code in users-list.component.ts file

- Component
- OnInit
- CrudService

```JS
import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../service/crud.service';

selector: 'app-users-list',

templateUrl: './users-list.component.html',

styleUrls: ['./users-list.component.scss']

export class UsersListComponent implements OnInit {

constructor(private crudService: CrudService) { }

this.crudService.GetUsers().subscribe(res => {

delete(id:any, i:any) {

if(window.confirm('Do you want to go ahead?')) {

this.crudService.deleteUser(id).subscribe((res) => {

this.Users.splice(i, 1);
```

> TODO: #22 Add the code in users-list.component.html file:

```HTML
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

<h2 class="h2">Users List</h2>

<div class="table-responsive">

<table class="table table-bordered">

<th scope="col">Id</th>

<th scope="col">Name</th>

<th scope="col">Email</th>

<th class="text-center" scope="col">Action</th>

<tr *ngFor="let user of Users; let i = index">

<th scope="row">{{user._id}}</th>

<td>{{user.name}}</td>

<td>{{user.email}}</td>

<td class="text-center">

<button class="btn btn-sm btn-primary" routerLink="/edit-user/{{user._id}}">Edit</button>

<button class="btn btn-sm btn-danger" (click)="delete(user._id, i)">Delete</button>
```

> TODO: #23 Add the code in user-detail.component.ts file:

- Component
- OnInit
- NgZone
- Router
- ActivatedRoute
- CrudService
- FormGroup
- FormBuilder

```JS
import { Component, OnInit, NgZone } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { CrudService } from './../../service/crud.service';

import { FormGroup, FormBuilder } from "@angular/forms";

selector: 'app-user-detail',

templateUrl: './user-detail.component.html',

styleUrls: ['./user-detail.component.scss']

export class UserDetailComponent implements OnInit {

public formBuilder: FormBuilder,

private router: Router,

private ngZone: NgZone,

private activatedRoute: ActivatedRoute,

private crudService: CrudService

this.getId = this.activatedRoute.snapshot.paramMap.get('id');

this.crudService.GetUser(this.getId).subscribe(res => {

this.updateForm.setValue({

name: res['name'],

email: res['email'],

this.updateForm = this.formBuilder.group({

this.crudService.updateUser(this.getId, this.updateForm.value)

console.log('User updated successfully!')

this.ngZone.run(() => this.router.navigateByUrl('/users-list'))

console.log(err);
```

> TODO: #24 Add the code in user-detail.component.html file:

```HTML
<div class="row justify-content-center mt-5">

<form [formGroup]="updateForm" (ngSubmit)="onUpdate()">

<div class="form-group">

<label>Name</label>

<input class="form-control" type="text" formControlName="name" required>

<div class="form-group">

<label>Email</label>

<input class="form-control" type="email" formControlName="email" required>

<div class="form-group">

<button class="btn btn-primary btn-block" type="submit">Update</button>
```

## Setting UP a (Fake) JSON REST API

you can either use an external API service, create a real REST API server or create a fake API
using json-server. In this example we’ll use the last approach. So head over to a new command-line
interface and start by installing json-server from npm in your project:
`$ cd ~/ngstore`
`$ npm install - save json-server`
mkdir server
`$ cd server`
In the server folder, create a database.json file and add the following JSON object:

database.json file:

```
{
"products": []
}
```

```
cd ..
$ npm install faker - save
```

generate.js file:

````var faker = require('faker');
var database = { products: []};
for (var i = 1; i<= 300; i++) {
database.products.push({
id: i,
name: faker.commerce.productName(),
description: faker.lorem.sentences(),
price: faker.commerce.price(),
imageUrl: "https://source.unsplash.com/1600x900/?product",
 quantity: faker.random.number()
 });
 }
 console.log(JSON.stringify(database));```


package.json file:

"scripts": {
"ng": "ng",
"start": "ng serve",
"build": "ng build",
"test": "ng test",
"lint": "ng lint",
"e2e": "ng e2e",
"generate": "node ./server/generate.js > ./server/database.json",
"server": "json-server - watch ./server/database.json"
 },

````

Next, head back to your command-line interface and run the generate script using the following
command:
`$ npm run generate`

finally, run the REST API server by executing the following command:
$ npm run server

These are the API endpoints we’ll be able to use via our JSON REST API server:

- GET /products for getting the products,
- GET /products/<id> for getting a single product by id,
- POST /products for creating a new product,
- PUT /products/<id> for updating a product by id,
- PATCH /products/<id> for partially updating a product by id,

## Setting UP Angular HttpClient in our Example

Project

test

## Code scaffolding

Run
` ng generate component component-name`

`ng g c category/list-category --spec=false --flat=true`

to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

> Components are the main building block for Angular applications. Each component consists of:

    - An HTML template that declares what renders on the page
    - A Typescript class that defines behavior
    - A CSS selector that defines how the component is used in a template
    - Optionally, CSS styles applied to the template

Main components:

- product

- Restaurant - ` ng generate component restaurant`

- customer - `ng generate component customer`
- Item - ` ng generate component item`
- Category - ` ng generate component category`
- Cart - ` ng generate component cart`
- Order - ` ng generate component order`
- Invoice - ` ng generate component invoice`
- User - ` ng generate component user`
- Subscription - ` ng generate component subscription`
- Option - ` ng generate component option`
- Selection - ` ng generate component selection`

`ng generate component restaurant `
`ng g c restaurant --spec false`

- install style/script
  npm i bootstrap@3.3.7
  npm i jquery@1.9.1

```
- module (module1)
  - component (person)
    - html
    - logic
    - data
```

CREATE src/app/restaurant/restaurant.component.css (0 bytes)
CREATE src/app/restaurant/restaurant.component.html (21 bytes)
CREATE src/app/restaurant/restaurant.component.spec.ts (628 s)  
CREATE spp/restaurant/restaurant.compones (269 bytes)

1. create a component
   - file name restaurant.component.ts

```ts
    import {}
    @Component({
      selector: 'restaurant-div',
      template:
    });
    export class RestaurantComponent{
    }
```

2. register in module
   - add to file app.module.ts

```ts
declarations: [AppComponent, RestaurantComponent];
```

3. add element in html markup
   - add to app.component.html

```html
<h3>Person Page</h3>
```

## Styling the UI with Angular Material

`ng add @angular/material`

Next, open the src/styles.css file and add a theme:

```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

import { MatToolbarModule,
 MatIconModule,
 MatCardModule,
 MatButtonModule,
 MatProgressSpinnerModule } from '@angular/material';

```

We imported the following modules:

- MatToolbar¹³ that provides a container for headers, titles, or actions.
- MatCard¹⁴ that provides a content container for text, photos, and actions in the context of a single subject.
- MatButton¹⁵ that provides a native button or a element enhanced with Material Design styling and ink ripples.
- MatProgressSpinner¹⁶ that provides a circular indicator of progress and activity.

```
imports: [
 ....
 ...
 ....
 BrowserAnimationsModule,
 MatToolbarModule,
 MatIconModule,
 MatButtonModule,
 MatCardModule,
 MatProgressSpinnerModule
 ],
```

src/app/app.component.html file

```html
<mat-toolbar color="primary">
  <h1>ngStore</h1>
  <button mat-button routerLink="/">Home</button>
  <button mat-button routerLink="/about">About</button>
</mat-toolbar>
<router-outlet></router-outlet>
```

## Consuming the JSON REST API with Angular HttpClient

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

https://jsonplaceholder.typicode.com/
