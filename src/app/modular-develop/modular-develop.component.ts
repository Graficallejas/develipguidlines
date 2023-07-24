import { Component, OnInit } from '@angular/core';
import * as dataInfo from "../dataInfo";

@Component({
  selector: 'app-modular-develop',
  templateUrl: './modular-develop.component.html',
  styleUrls: ['./modular-develop.component.scss']
})
export class ModularDevelopComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.modularDevelop;

  constructor() { }

  ngOnInit(): void {
  }

}
