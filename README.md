# LineOnLine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

> Components are the main building block for Angular applications. Each component consists of:

    - An HTML template that declares what renders on the page
    - A Typescript class that defines behavior
    - A CSS selector that defines how the component is used in a template
    - Optionally, CSS styles applied to the template

Main components:
- restaurant
- customer
- product

ng generate component restaurant 
ng g c restaurant-list --spec false
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

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
