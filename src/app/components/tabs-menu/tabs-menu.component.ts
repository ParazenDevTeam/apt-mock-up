import { Component, OnInit, Input } from '@angular/core';
import { Routes, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.component.html',
  styleUrls: ['./tabs-menu.component.scss']
})
export class TabsMenuComponent implements OnInit {

  @Input() pages: Routes;

  menuIsOpen: boolean = false;
  activePage: string = '';

  constructor(public route: ActivatedRoute, public router: Router) {
    this.activePage = route.snapshot.url.join('');
    this.pages = this.router.config;
  }

  ngOnInit() {
  }

  changePage(page: string) {
    this.router.navigateByUrl(page)
  }

}
