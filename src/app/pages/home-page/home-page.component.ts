import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultListComponent } from 'src/app/components/result-list/result-list.component';
import { TabsMenuComponent } from 'src/app/components/tabs-menu/tabs-menu.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  @ViewChild('searchBar', null) searchBar: TabsMenuComponent;
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
