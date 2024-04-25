import {inject, Injectable} from "@angular/core";
import {Item} from "../models/item.interface";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../core/state/app.state";
import {GithubReposResponse} from "../models/github-response.interface";
import {
  selectGihhubReposIsLoading,
  selectGithubRepo,
  selectGithubReposResponse,
  selectPageIndex, selectPageSize
} from "../state/github-repos.selectors";
import { GithubReposActions } from "../state/github-repos.actions";

@Injectable({ providedIn: 'root' })
export class GithubReposFacade {

  private readonly store: Store = inject(Store<AppState>);

  readonly githubReposIsLoadings: Observable<boolean> = this.store.select(selectGihhubReposIsLoading);
  readonly githubReposResults: Observable<GithubReposResponse | null> = this.store.select(selectGithubReposResponse);
  readonly selectedGithubRepo: Observable<Item | null> = this.store.select(selectGithubRepo);
  readonly githubReposPageIndex: Observable<number> = this.store.select(selectPageIndex);
  readonly githubReposPageSize: Observable<number> = this.store.select(selectPageSize);


  setSearchText(searchText: string): void {
    this.store.dispatch(GithubReposActions.setSearchText({ searchText }));
  }

  setPageIndex(page: number): void {
    this.store.dispatch(GithubReposActions.setPageIndex({page}));
  }

  setPageSize(pageSize: number): void {
    this.store.dispatch(GithubReposActions.setPageSize({pageSize}));
  }

  loadGithubRepos(): void {
    this.store.dispatch(GithubReposActions.loadGithubRepos());
  }

  setSelectedGithubRepo(githubRepo: Item): void {
    this.store.dispatch(GithubReposActions.setSelectedGithubRepo({githubRepo}));
  }

  resetSearchResults() {
    this.store.dispatch(GithubReposActions.resetSearchResults());
  }
}
