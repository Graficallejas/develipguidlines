import { Component, OnInit } from '@angular/core';
import * as dataInfo from "../dataInfo";

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.lazyLoad;

  constructor() { }

  ngOnInit(): void {
  }

}
