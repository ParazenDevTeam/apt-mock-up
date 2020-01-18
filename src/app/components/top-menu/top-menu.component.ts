import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  isOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSearchBar() {
    this.isOpened = !this.isOpened;
  }

}
