export interface SidenavItemBase {
  text: string;
  matIcon: string;
  url: string;
  active: boolean;
}

export interface SidenavItem extends SidenavItemBase {
  subItems?: SidenavItemBase[];
}
