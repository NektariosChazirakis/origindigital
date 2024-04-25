import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

import { Subject } from 'rxjs';
import {
 MatTableModule
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatCardAvatar} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Item} from "../../../models/item.interface";
import {DatePipe} from "@angular/common";
import {BooleanToTextPipe} from "../../../../../shared/pipes/boolean-to-text.pipe";

@Component({
  selector: 'app-github-repos-table-view',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardAvatar,
    MatIconModule,
    MatSort,
    MatIconButton,
    DatePipe,
    BooleanToTextPipe,
  ],
  templateUrl: './github-repos-table-view.component.html',
  styleUrl: './github-repos-table-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubReposTableViewComponent implements OnDestroy {
  @Input() data: Item[] = [];

  @Output() selectedGithubRepo = new EventEmitter<Item>();

  displayedColumns: string[] = [
    'id',
    'name',
    'private',
    'owner',
    'languages_url',
    'homepage',
    'created_at',
    'updated_at',
    'actions'
  ];

  readonly repoPrivacy = ['Private', 'Public'];

  destroy$: Subject<boolean> = new Subject<boolean>();

  onselectedGithubRepo(githubRepo: Item): void {
    this.selectedGithubRepo.emit(githubRepo);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
