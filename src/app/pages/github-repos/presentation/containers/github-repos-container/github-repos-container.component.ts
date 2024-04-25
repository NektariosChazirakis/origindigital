import { ActivatedRoute, Router } from '@angular/router';
import {AsyncPipe, JsonPipe} from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subject, takeUntil, tap} from 'rxjs';

import {FlexModule} from "@ngbracket/ngx-layout";
import {GithubReposFacade} from "../../../facade/github-repos.facade";
import {GithubReposListComponent} from "../../components/github-repos-list/github-repos-list.component";
import {GithubReposResponse} from "../../../models/github-response.interface";
import {
  GithubReposSearchFilterComponent
} from "../../components/github-repos-search-filter/github-repos-search-filter.component";
import {Item} from "../../../models/item.interface";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-github-repos-container',
  standalone: true,
  imports: [GithubReposSearchFilterComponent, GithubReposListComponent, AsyncPipe, FlexModule, MatCardModule, JsonPipe],
  templateUrl: './github-repos-container.component.html',
  styleUrl: './github-repos-container.component.scss',
})
export class GithubReposContainerComponent implements OnInit, OnDestroy {

  githubIsLoading$: Observable<boolean> = this.githubReposFacade.githubReposIsLoadings;
  githubReposSearchResults$: Observable<GithubReposResponse | null> = this.githubReposFacade.githubReposResults;
  githubPageIndex$: Observable<number> = this.githubReposFacade.githubReposPageIndex;
  githubPageSize$: Observable<number> = this.githubReposFacade.githubReposPageSize;
  selectedGithubRepo: Item | null = null;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private githubReposFacade: GithubReposFacade
  ) {}

  ngOnInit(): void {

    this.githubReposFacade.selectedGithubRepo
    .pipe(
      takeUntil(this.destroy$),
      tap((GithubRepo) => this.selectedGithubRepo = GithubRepo)
    ).subscribe()

  }

  loadData(): void {
    this.githubReposFacade.loadGithubRepos();
  }

  resetSearchResults() {
    this.githubReposFacade.resetSearchResults()
  }

  setSelectedGithubRepo(GithubRepo: Item): void {
    this.githubReposFacade.setSelectedGithubRepo(GithubRepo)
  }

  viewSelectedGithubRepoDetails() {
    this.router.navigate([`/github-repos/${this.selectedGithubRepo?.id}`], {
      state: { githubRepo: this.selectedGithubRepo },
      relativeTo: this.route,
    })
  }

  onChangedSearchText(searchText: string) {
    this.githubReposFacade.setSearchText(searchText);
    if(searchText.length >= 3){
      this.loadData();
    } else {
      this.resetSearchResults()
    }
  }

  onChangedPageIndex(pageIndex: number) {
    this.githubReposFacade.setPageIndex(pageIndex);
    this.loadData();
  }

  onChangedPageSize(pageSize: number) {
    this.githubReposFacade.setPageSize(pageSize);
    this.loadData();
  }

  onSelectedGithubRepo(GithubRepo: Item) {
    this.setSelectedGithubRepo(GithubRepo) ;
    this.viewSelectedGithubRepoDetails();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
