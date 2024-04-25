import { SidenavItem } from './sidenav-item.interface';

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    text: 'Home',
    matIcon: 'home-container',
    url: '/home',
    active: false,
  },
  {
    text: 'Github repos',
    matIcon: 'home_storage',
    url: '/github-repos',
    active: false,
  },

  {
    text: 'Reports',
    matIcon: 'summarize',
    url: '/reports',
    active: false,
  },
  {
    text: 'Admin',
    matIcon: 'admin_panel_settings',
    url: '/admin',
    active: false,
  },
];
