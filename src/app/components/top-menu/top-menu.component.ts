import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

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
      'menu-opened': this.menuIsOpen,
      'menu-closed': !this.menuIsOpen
    }
  }

  changePage(page: string) {
    this.router.navigateByUrl(page)
    this.toggle();
  }

}
