# Origindigital

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Documentation

Technical documentation for the project has been created with the Compodoc package. To see it, serve the index.html file located inside the "documenetation" folder in the root directory.

## Working with the App
Although not in the requirements, the user needs to Authenticate before using the app. Authentication is achieved via the Auth0 package. Once the app is served (via ng serve) the app will redirect the user to the Auth0 page for login. Only when the user logs in successfully, they will be redirected back to the system and can continue using the app. A purpose-specific user has been created for the Origin Digital task, as follows:

email: nektarios.chazirakis@gmail.com password: Orig!nDigital2024


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
