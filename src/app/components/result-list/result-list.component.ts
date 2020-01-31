import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {

  @Input() theme: string = 'light';

  products: any = [
    {
      "name": "TV Televisión Televisor Engel Ever-LED LE2050 20 - HD - USB PVR- OCA-Modo Hotel (B07QVHD5BS)",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Nintendo Switch - Consola color Azul Neón/Rojo Neón (Modelo 2019) (B07WKNQ8JT)",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV Televisión Televisor Engel Ever-LED LE2050 20 - HD - USB PVR- OCA-Modo Hotel (B07QVHD5BS)",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Nintendo Switch - Consola color Azul Neón/Rojo Neón (Modelo 2019) (B07WKNQ8JT)",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV Televisión Televisor Engel Ever-LED LE2050 20 - HD - USB PVR- OCA-Modo Hotel (B07QVHD5BS)",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Nintendo Switch - Consola color Azul Neón/Rojo Neón (Modelo 2019) (B07WKNQ8JT)",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "Nintendo Switch - Consola color Azul Neón/Rojo Neón (Modelo 2019) (B07WKNQ8JT)",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "Nintendo Switch - Consola color Azul Neón/Rojo Neón (Modelo 2019) (B07WKNQ8JT)",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV Televisión Televisor Engel Ever-LED LE2050 20 - HD - USB PVR- OCA-Modo Hotel (B07QVHD5BS)",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    },
    {
      "name": "Nintendo Switch - Consola color Azul Neón/Rojo Neón (Modelo 2019) (B07WKNQ8JT)",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "Nintendo Switch - Consola color Azul Neón/Rojo Neón (Modelo 2019) (B07WKNQ8JT)",
      "price": 349.00,
      "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/233482/1.jpg"
    },
    {
      "name": "TV Televisión Televisor Engel Ever-LED LE2050 20 - HD - USB PVR- OCA-Modo Hotel (B07QVHD5BS)",
      "price": 143.99,
      "image": "https://images.samsung.com/is/image/samsung/latin-qled-q60r-row-qn75q60rapxpa-frontblack-163943271?$PD_GALLERY_L_JPG$",
    }
  ];

  constructor() {
  }

}
