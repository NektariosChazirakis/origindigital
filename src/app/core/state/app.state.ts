
import {RouterReducerState} from "@ngrx/router-store";
import { GithubReposState } from "../../pages/github-repos/state/github-repos.state";

export interface AppState {
  githubRepos: GithubReposState,
  router: RouterReducerState<any>;
}
