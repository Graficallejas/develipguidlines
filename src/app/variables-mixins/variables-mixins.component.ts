import { Component, OnInit } from '@angular/core';
import * as dataInfo from "../dataInfo";

@Component({
  selector: 'app-variables-mixins',
  templateUrl: './variables-mixins.component.html',
  styleUrls: ['./variables-mixins.component.scss']
})
export class VariablesMixinsComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.variablesMixins;

  constructor() { }

  ngOnInit(): void {
  }

}
