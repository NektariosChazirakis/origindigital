import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  tap,
} from 'rxjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-github-repos-search-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './github-repos-search-filter.component.html',
  styleUrl: './github-repos-search-filter.component.scss',
})
export class GithubReposSearchFilterComponent implements OnInit, OnDestroy {
  @Output() changedSearchText: EventEmitter<string> = new EventEmitter<string>();

  searchControl = new FormControl('', [Validators.minLength(3)]);

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(150),
        distinctUntilChanged(),
        tap((value) => this.changedSearchText.emit(value as string))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
