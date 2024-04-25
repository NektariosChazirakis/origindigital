import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import {Subject, takeUntil, tap} from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$
      .pipe(
        takeUntil(this.destroy$),
        tap((isAuthenticated) => {
          if (!isAuthenticated) {
            this.auth.loginWithRedirect({
              appState: { target: '/logged-in-container' },
            });
          }
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
