import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.prescriptions;

  constructor() { }

  ngOnInit(): void {
  }

}
