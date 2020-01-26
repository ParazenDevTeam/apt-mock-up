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
  theme: string = 'light';

  constructor(public route: ActivatedRoute, public router: Router) {
    this.activePage = route.snapshot.url.join('');
    this.pages = this.router.config;
  }

  ngOnInit() {
    var param = this.route.snapshot.queryParamMap.get('theme');
    if (param != null)
      this.theme = (param.toLowerCase() == 'dark') ? 'dark' : 'light';
  }

  toogleTheme() {
    this.theme = (this.theme == 'dark') ? 'light' : 'dark';
  }

  toggle(): boolean {
    this.menuIsOpen = !this.menuIsOpen;
    return this.menuIsOpen;
  }

  changePage(page: string) {
    this.router.navigateByUrl(page)
    console.log(page);
    this.toggle();
  }

}
