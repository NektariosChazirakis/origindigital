import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  computed,
  signal,
} from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';

import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { Subject } from 'rxjs';
import { User } from '@auth0/auth0-angular';
import {SidenavItem} from "../../model/sidenav-item.interface";

@Component({
  selector: 'app-logged-in-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbar,
    MatDivider,
    MatSidenav,
    RouterOutlet,
    MatIcon,
    MatIconButton,
    CustomSidenavComponent,
  ],
  templateUrl: './logged-in-layout.component.html',
  styleUrl: './logged-in-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInLayoutComponent implements OnDestroy {
  @Input() user: User | null | undefined = null;
  @Input() sidenavItems!: SidenavItem[];
  @Output() sidenavItemSelected: EventEmitter<SidenavItem> = new EventEmitter();
  @Output() logoutSelected: EventEmitter<void> = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();

  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  constructor(private router: Router) {}

  onSelectedSidenavItem(sidenavItem: SidenavItem): void {
    this.sidenavItemSelected.emit(sidenavItem);
  }

  onLogoutSelected() {
    this.logoutSelected.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }
}
