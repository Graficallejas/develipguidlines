import { Component, OnInit } from '@angular/core';
import * as dataInfo from "../dataInfo";


@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.scope;

  constructor() { }

  ngOnInit(): void {
  }

}
