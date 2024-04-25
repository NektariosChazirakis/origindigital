import {createReducer, on} from "@ngrx/store";
import {initialGithubReposState} from "./github-repos.state";
import {GithubReposActions} from "./github-repos.actions";


export const githubReposReducer = createReducer(
  initialGithubReposState,
  on(GithubReposActions.resetSearchResults, state => ({
    ...initialGithubReposState,
  })),
  on(GithubReposActions.setSearchText, (state, payload) => ({
    ...state,
    searchText: payload.searchText,
  })),
  on(GithubReposActions.setPageIndex, (state, payload) => ({
    ...state,
    page: payload.page,
  })),
  on(GithubReposActions.setPageSize, (state, payload) => ({
    ...state,
    pageSize: payload.pageSize,
  })),
  on(GithubReposActions.loadGithubRepos, state => ({
    ...state,
    isLoading: true
  })),
  on(GithubReposActions.loadGithubReposSuccess, (state, payload) => ({
    ...state,
    githubReposResponse: payload.githubReposResponse,
    isLoading: false
  })),
  on(GithubReposActions.loadGithubReposFailure, (state, payload) => ({
    ...state,
    error: payload.error,
    isLoading: false
  })),
  on(GithubReposActions.setSelectedGithubRepo, (state, payload) => ({
    ...state,
    selectedGithubRepo: payload.githubRepo
  }))
);
