import { Component, OnInit, ViewChild } from '@angular/core';
import { TopMenuComponent } from 'src/app/components/top-menu/top-menu.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  @ViewChild('searchBar', null) searchBar: TopMenuComponent;

  ngOnInit() {
  }

}
