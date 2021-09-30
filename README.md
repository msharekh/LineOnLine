# LineOnLine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.


Angular CLI: 8.0.6
Node: 10.13.0
OS: darwin x64
Angular: 8.0.3

## Development server
npm install -g @angular/cli

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

``` ng serve --open ```

```npm run server```

## Setting up a (Fake) JSON REST API
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
```var faker = require('faker');
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

```
Next, head back to your command-line interface and run the generate script using the following
command:
```$ npm run generate```

finally, run the REST API server by executing the following command:
$ npm run server

These are the API endpoints we’ll be able to use via our JSON REST API server:

- GET /products for getting the products,
- GET /products/<id> for getting a single product by id,
- POST /products for creating a new product,
- PUT /products/<id> for updating a product by id,
- PATCH /products/<id> for partially updating a product by id,


## Setting up Angular HttpClient in our Example
Project




## Code scaffolding

Run 
``` ng generate component component-name```

 to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

> Components are the main building block for Angular applications. Each component consists of:

    - An HTML template that declares what renders on the page
    - A Typescript class that defines behavior
    - A CSS selector that defines how the component is used in a template
    - Optionally, CSS styles applied to the template

Main components:
- restaurant
- customer
- product

`ng generate component restaurant `
`ng g c restaurant --spec false`
* install style/script
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
```
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
  declarations:[
    AppComponent,
    RestaurantComponent
  ]
   ```  
3. add element in html markup 
   - add to app.component.html
   ```html
    <h3>Person Page </h3>
   ```

## Styling the UI with Angular Material

```ng add @angular/material```

Next, open the src/styles.css file and add a theme:
@import "~@angular/material/prebuilt-themes/indigo-pink.css";



import { MatToolbarModule,
2 MatIconModule,
3 MatCardModule,
4 MatButtonModule,
5 MatProgressSpinnerModule } from '@angular/material';
We imported the following modules:
• MatToolbar¹³ that provides a container for headers, titles, or actions.
• MatCard¹⁴ that provides a content container for text, photos, and actions in the context of a
single subject.
• MatButton¹⁵ that provides a native <button> or <a> element enhanced with Material Design
styling and ink ripples.
• MatProgressSpinner¹⁶ that provides a circular indicator of progress and activity.


imports: [
8 ....
9 ...
10 ....
11 BrowserAnimationsModule,
12 MatToolbarModule,
13 MatIconModule,
14 MatButtonModule,
15 MatCardModule,
16 MatProgressSpinnerModule
17 ],

src/app/app.component.html file
```html
<mat-toolbar color="primary">
<h1>
ngStore
</h1>
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

