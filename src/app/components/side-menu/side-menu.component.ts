import { Routes, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() pages: Routes;

  menuIsOpen: boolean = false;
  activePage: string = '';

  constructor(public route: ActivatedRoute, public router: Router) {
    this.activePage = route.snapshot.url.join('');
    this.pages = this.router.config;
  }

  ngOnInit() {
  }

  toggle(): boolean {
    this.menuIsOpen = !this.menuIsOpen;
    return this.menuIsOpen;
  }

  get menu_state(): any {
    return {
      'sidenav-opened': this.menuIsOpen,
      'sidenav-closed': !this.menuIsOpen
    }
  }

  changePage(page: string) {
    this.router.navigateByUrl(page)
    this.toggle();
  }

}
