import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  shops: any = [
    { name: 'amazon', selected: false },
    { name: 'ebay',  selected: false },
    { name: 'aliexpress', selected: false },
    { name: 'elcorteingles', selected: false },
    { name: 'pccomponentes', selected: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  getPhoto(shop: string) {
    return '../../../assets/img/' + shop.toLowerCase() + '-icon.png';
  }

}
