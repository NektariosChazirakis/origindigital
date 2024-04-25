import {
  AdminContainerComponent
} from "../../pages/admin/presentation/containers/admin-container/admin-container.component";
import {HomeContainerComponent} from "../../pages/home/presentation/containers/home-container/home-container.component";
import {
  ReportsContainerComponent
} from "../../pages/reports/presentation/containers/reports-container/reports-container.component";
import { Routes } from '@angular/router';
import { GithubReposContainerComponent } from '../../pages/github-repos/presentation/containers/github-repos-container/github-repos-container.component';
import {
  ViewGithubRepoDetailsComponent
} from "../../pages/github-repos/presentation/components/view-github-repo-details/view-github-repo-details.component";


export const LOGGED_IN_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
  },
  {
    path: 'github-repos',
    component: GithubReposContainerComponent,
  },
  {
    path: 'github-repos/:id',
    component: ViewGithubRepoDetailsComponent,
  },
  {
    path: 'reports',
    component: ReportsContainerComponent,
  },
  {
    path: 'admin',
    component: AdminContainerComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
