import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gorup-members-table',
  templateUrl: './gorup-members-table.component.html',
  styleUrls: ['./gorup-members-table.component.scss']
})
export class GorupMembersTableComponent implements OnInit {

  constructor() { }


  sample_data:any=[
    {
      number:1,

    },
    {
      number:null
    }
  ]

  ngOnInit(): void {

    this.dataSource=this.sample_data
  }

  displayedColumns: string[] = [
    'GroupNo',
    'Members'
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
