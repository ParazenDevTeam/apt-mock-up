import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'text-wrap',
  templateUrl: './text-wrap.component.html',
  styleUrls: ['./text-wrap.component.scss']
})
export class TextWrapComponent implements OnInit {

  @Input() text: string;
  @Input() length: number;

  constructor() {}

  ngOnInit() {
    if (this.text.length > this.length) this.text = this.text.substr(0, this.length-1)+'...';
  }

}