import { Component, OnInit, ViewChild } from '@angular/core';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { ResultListComponent } from 'src/app/components/result-list/result-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  @ViewChild('searchBar', null) searchBar: SideMenuComponent;
  @ViewChild('resultList', null) resultList: ResultListComponent;

  ngOnInit() {
  }

  get hideSearchButton(): any {
    return {
      "hide" : this.searchBar.menuIsOpen,
      "visible" : !this.searchBar.menuIsOpen
    }
  }

}
