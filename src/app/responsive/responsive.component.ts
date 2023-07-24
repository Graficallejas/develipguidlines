import { Component, OnInit } from '@angular/core';
import * as dataInfo from "../dataInfo";

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.scss']
})
export class ResponsiveComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.responsiveDesing;

  constructor() { }

  ngOnInit(): void {
  }

}
