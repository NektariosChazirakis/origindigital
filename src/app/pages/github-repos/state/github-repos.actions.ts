import {createAction, props} from "@ngrx/store";
import {GithubReposResponse} from "../models/github-response.interface";
import {Item} from "../models/item.interface";

const resetSearchResults = createAction(
  '[GithubRepos Container] Reset Search',
);

const setSearchText = createAction(
  '[GithubRepos Container] Set Search Text',
  props<{ searchText: string }>()
);


const setPageIndex = createAction(
  '[GithubRepos Container] Set PageIndex',
  props<{ page: number }>()
);

const setPageSize = createAction(
  '[GithubRepos Container] Set Page size',
  props<{ pageSize: number }>()
);

const loadGithubRepos = createAction(
  '[GithubRepos Container] Load GithubRepos',
);

const loadGithubReposSuccess = createAction(
  '[GithubRepos API] Load GithubRepos Success',
  props<{ githubReposResponse: GithubReposResponse }>()
);

const loadGithubReposFailure = createAction(
  '[GithubRepos API] Load GithubRepos Failure',
  props<{ error: any }>()
);

const setSelectedGithubRepo = createAction(
  '[GithubRepos Container] Set Selected Github Repo',
  props<{ githubRepo: Item }>()
);

export const GithubReposActions = {
  resetSearchResults,
  setSearchText,
  setPageIndex,
  setPageSize,
  loadGithubRepos,
  loadGithubReposSuccess,
  loadGithubReposFailure,
  setSelectedGithubRepo,
}
