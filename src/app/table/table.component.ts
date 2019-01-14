import { Component, OnInit } from '@angular/core';
import { OptionValues } from '../model/option.model';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public readonly displayedColumns = ['Key', 'Value', 'Description'];
  public OptionValues: OptionValues[] = [{Key: '', Value: '', Description: ''}];
  constructor() { }
  public dataSource: MatTableDataSource<OptionValues> = new MatTableDataSource(this.OptionValues);
  ngOnInit() {

  }
  public getFlex(): number {
    return 100 / this.displayedColumns.length;
  }
  public updateDataSource(element: OptionValues): void {
    if (this.dataSource.data.findIndex(e => e === element) === this.dataSource.data.length - 1) {
      this.add();
    } else if (this.dataSource.data.length !== 1 && this.isNull(element)) {
      this.remove(element);
    }
  }
  private add() {
    const added = this.dataSource.data;
    added.push({Key: '', Value: '', Description: ''});
    this.dataSource = new MatTableDataSource(added);
  }
  private isNull(optionValues: OptionValues): boolean {
    return optionValues.Key === '' && optionValues.Description === '' && optionValues.Value === '';
  }
  private remove(element: OptionValues) {
    const removed = this.dataSource.data.filter(e => e !== element);
    this.dataSource = new MatTableDataSource(removed);
  }
}
