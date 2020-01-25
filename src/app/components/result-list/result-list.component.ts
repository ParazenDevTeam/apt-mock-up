import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {

  products: any = [
    {
      "name": "TV",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Switch",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Switch",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Switch",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "Switch",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "Switch",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Switch",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "Switch",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    }
  ];

  constructor() {
  }

}
