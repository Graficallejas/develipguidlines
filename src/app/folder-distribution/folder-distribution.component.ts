import { Component, OnInit } from '@angular/core';
import * as dataInfo from "../dataInfo";
@Component({
  selector: 'app-folder-distribution',
  templateUrl: './folder-distribution.component.html',
  styleUrls: ['./folder-distribution.component.scss']
})
export class FolderDistributionComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.folderstructure;

  constructor() { }

  ngOnInit(): void {
  }

}
