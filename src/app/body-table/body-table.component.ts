import { Component, OnInit } from '@angular/core';
import { BodyTableOptions } from '../model/bodytableOption.model';

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.scss']
})
export class BodyTableComponent implements OnInit {
  public readonly bodyTableOptions = BodyTableOptions;
  public selectedOption: BodyTableOptions = BodyTableOptions.NONE;
  constructor() { }

  ngOnInit() {
  }

}
