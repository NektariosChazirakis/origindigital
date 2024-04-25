import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {SIDENAV_ITEMS} from "../../model/sidenav-items.constant";
import {SidenavItem} from "../../model/sidenav-item.interface";
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
  @Input() user: User | null = null;
  @Input() sidenavItems: SidenavItem[] = SIDENAV_ITEMS;

  @Output() selectedSidenavItem: EventEmitter<SidenavItem> = new EventEmitter();
  @Output() logoutSelected: EventEmitter<void> = new EventEmitter();

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));

  onSelectedSidenavItem(sidenavItem: SidenavItem): void {
    const itemIdx = this.sidenavItems.findIndex((item) => item === sidenavItem);
    this.sidenavItems[itemIdx].active = true;
    this.selectedSidenavItem.emit(sidenavItem);
  }

  onLogoutSelected(): void {
    this.logoutSelected.emit();
  }
}
