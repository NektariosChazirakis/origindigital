import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GithubReposActions} from "./github-repos.actions";
import {catchError, combineLatestAll, exhaustMap, map, of, withLatestFrom} from "rxjs";
import {GithubReposService} from "../api/githubRepos.service";
import {AppState} from "../../../core/state/app.state";
import {Store} from "@ngrx/store";
import {selectPageIndex, selectPageSize, selectSearchText} from "./github-repos.selectors";

@Injectable()
export class GithubReposEffects {
  loadGithubRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GithubReposActions.loadGithubRepos),
      withLatestFrom(this.store.select(selectSearchText), this.store.select(selectPageIndex), this.store.select(selectPageSize)),
      exhaustMap(([action, searchText, pageIndex, pageSize]) => this.githubReposService.getGithubRepos(searchText, pageIndex, pageSize)
        .pipe(
          map((githubReposResponse) => GithubReposActions.loadGithubReposSuccess({githubReposResponse})),
          catchError((error) => of(GithubReposActions.loadGithubReposFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private githubReposService: GithubReposService,
    private store: Store<AppState>
  ) {}
}
