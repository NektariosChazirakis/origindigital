import { Routes } from '@angular/router';
import {AuthGuard} from "../auth/guards/auth.guard";
import {
  LoggedInContainerComponent
} from "../../shared/layout/containers/logged-in-container/logged-in-container.component";

export const routes: Routes = [
  {
    path: '',
    component: LoggedInContainerComponent,
    loadChildren: () =>
      import('./logged-in.routes').then(
        (r) => r.LOGGED_IN_ROUTES,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error.routes').then((r) => r.ERROR_ROUTES),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
