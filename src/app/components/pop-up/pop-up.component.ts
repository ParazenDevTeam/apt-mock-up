import { Component, OnInit, Input } from '@angular/core';

export interface PopUp  {
  styles: Style;
}

export interface Style {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  boxShadow?: string;
}

@Component({
  selector: 'app-pop-up',
  template: '<section class="pop-up"><ng-content></ng-content></section>',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() popup: PopUp;

  constructor() { }

  ngOnInit() {
  }

  get myStyles() {
    return {
      'width': this.popup.styles.width || '100%',
      'height': this.popup.styles.height || '100%',
      'margin': this.popup.styles.margin || '15px',
      'padding': this.popup.styles.padding || '0',
      'background-color': this.popup.styles.backgroundColor || 'white',
      'border-radius': this.popup.styles.borderRadius || '8px',
      'border': this.popup.styles.border || 'unset',
      'box-shadow': this.popup.styles.boxShadow || '0px 2px 7px -1px rgb(160, 160, 160)',
    }
  }

}
