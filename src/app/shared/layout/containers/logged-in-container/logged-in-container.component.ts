import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService, User } from '@auth0/auth0-angular';
import { LoggedInLayoutComponent } from '../../components/logged-in-layout/logged-in-layout.component';
import { Router } from '@angular/router';
import { SIDENAV_ITEMS } from "../../model/sidenav-items.constant";
import { SidenavItem } from "../../model/sidenav-item.interface";

@Component({
  selector: 'app-logged-in-container',
  standalone: true,
  imports: [CommonModule, LoggedInLayoutComponent],
  templateUrl: './logged-in-container.component.html',
  styleUrl: './logged-in-container.component.scss',
})
export class LoggedInContainerComponent implements OnInit {
  user$!: Observable<User | null | undefined>;
  sidenavItems = SIDENAV_ITEMS;

  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(DOCUMENT) public document: Document,
  ) {}

  ngOnInit() {
    this.user$ = this.auth.user$;
  }

  handleSelectedSidenavItem(sidenavItem: SidenavItem) {
    // Redirect to the selected URL
    this.router.navigateByUrl(sidenavItem.url);
  }

  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin,
      },
    });
  }
}
