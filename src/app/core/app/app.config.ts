import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import {BrowserModule} from "@angular/platform-browser";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideHttpClient} from "@angular/common/http";

import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../../../environments/environment";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideRouterStore, routerReducer} from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {CustomSerializer} from "../state/custom-route-serializer";
import {githubReposReducer} from "../../pages/github-repos/state/github-repos.reducers";
import {GithubReposEffects} from "../../pages/github-repos/state/github-repos.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, AuthModule.forRoot(environment.auth)),
    provideAnimationsAsync(),
    provideRouter(routes),
    provideHttpClient(), provideAnimationsAsync(),
    provideStore({
        githubRepos: githubReposReducer,
        router: routerReducer
    }),
    provideEffects([GithubReposEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouterStore({ serializer: CustomSerializer }),

]
};
