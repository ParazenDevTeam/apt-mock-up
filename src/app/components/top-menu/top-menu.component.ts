import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  menu: any[] = [
    'Search',
    'Watchlist',
    'Settings'
  ]

  menuIsOpen: Boolean = false;

  activePage: String = this.menu[0];

  constructor() { }

  ngOnInit() {
  }

  toggle(): Boolean {
    this.menuIsOpen = !this.menuIsOpen;
    return this.menuIsOpen;
  }

  get menu_state(): any {
    return {
      'menu-opened': this.menuIsOpen,
      'menu-closed': !this.menuIsOpen
    }
  }

  changePage(page: String) {
    this.activePage = page;
    this.toggle();
  }

}
