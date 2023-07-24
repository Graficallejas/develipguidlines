import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-js-clean-code-bp',
  templateUrl: './js-clean-code-bp.component.html',
  styleUrls: ['./js-clean-code-bp.component.scss']
})
export class JsCleanCodeBPComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.jsCleanCode;

  constructor() { }

  ngOnInit(): void {
  }

}
