import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GithubReposState} from "./github-repos.state";

export const selectGithubReposState = createFeatureSelector<GithubReposState>('githubRepos');

export const selectSearchText = createSelector(
  selectGithubReposState,
  (githubReposState) => githubReposState.searchText
);

export const selectPageIndex = createSelector(
  selectGithubReposState,
  (githubReposState) => githubReposState.page
);

export const selectPageSize = createSelector(
  selectGithubReposState,
  (githubReposState) => githubReposState.pageSize
);


export const selectGihhubReposIsLoading = createSelector(
  selectGithubReposState,
  (githubReposState) => githubReposState.isLoading
);

export const selectGithubReposResponse = createSelector(
  selectGithubReposState,
  (githubReposState) => githubReposState.githubReposResponse
);

export const selectGithubRepo = createSelector(
  selectGithubReposState,
  (githubReposState) => githubReposState.selectedGithubRepo
);
