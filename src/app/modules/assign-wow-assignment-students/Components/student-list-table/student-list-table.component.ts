import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-list-table',
  templateUrl: './student-list-table.component.html',
  styleUrls: ['./student-list-table.component.scss']
})
export class StudentListTableComponent implements OnInit {
  sample_data:any=[
    {
     name:'krishna Kumar'
  },
  {
    name:'Vijay'
  }

]
  constructor() { }

  ngOnInit(): void {
    this.dataSource=this.sample_data

  }
  filterValue = '';
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  displayedColumns: string[] = [
    'dateAndTime'
  ];


  dataSource: MatTableDataSource<PeriodicElement> =
  new MatTableDataSource<PeriodicElement>();
selection = new SelectionModel<PeriodicElement>(true, []);


@ViewChild(MatPaginator) paginator!: MatPaginator;

@ViewChild('paginatorElement', { read: ElementRef })
paginatorHtmlElement!: ElementRef;

rowValue: any[] = [];

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
