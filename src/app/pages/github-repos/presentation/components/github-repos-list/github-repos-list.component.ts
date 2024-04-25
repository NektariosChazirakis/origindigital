import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import {GithubReposResponse} from "../../../models/github-response.interface";
import {Item} from "../../../models/item.interface";
import {GithubReposTableViewComponent} from "../github-repos-table-view/github-repos-table-view.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {JsonPipe} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-github-repos-list',
  standalone: true,
  templateUrl: './github-repos-list.component.html',
  styleUrl: './github-repos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    GithubReposTableViewComponent,
    MatPaginator,
    MatProgressSpinnerModule,
    JsonPipe
  ],
})
export class GithubReposListComponent implements AfterViewInit, OnDestroy {
  @Input() loading: boolean = true;
  @Input() githubReposSearchResults: GithubReposResponse = {} as GithubReposResponse;
  @Input() pageIndex: number = 0;
  @Input() pageSize: number = 10;

  @Output() changedPageIndex: EventEmitter<number> = new EventEmitter<number>();
  @Output() changedPageSize: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectedGithubRepo: EventEmitter<Item> = new EventEmitter<Item>();

  prevPageIndex: number = 0;
  paginatorReady = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Item>;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginatorReady = true;
  }

  onSelectedGithubRepo(githubRepo: Item) {
    this.selectedGithubRepo.emit(githubRepo);
  }

  onChangedPageData(pageData: PageEvent) {
    this.changedPageSize.emit(pageData.pageSize);
    this.changedPageIndex.emit(pageData.pageIndex + 1);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
