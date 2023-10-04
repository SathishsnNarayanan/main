import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { HeaderTitleService } from 'src/app/shared/services/header-title/header-title.service';

import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { Table } from 'src/app/models/syllabus-tree.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-wow-assignment-name-Table',
  templateUrl: './wow-assignment-name-table.html',
  styleUrls: ['./wow-assignment-name-table.scss']
})
export class WOWAssignmentNameTableComponent implements OnInit {

  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 20];

  rating3!:number;
  public form!:FormGroup

  constructor(
    private _headerTitle:HeaderTitleService,
    private _apiService:ApiService,
    private formBuilder:FormBuilder
  ) {
    this.rating3 =0;
    this.form =this.formBuilder.group({
      rating1:['',Validators.required],
      rating2:[4]
    })
   }


  sample_data:any=[
    {
    Edited_DateTime:'12 Jul 2021, 5:00 PM',
    wow_assignment_name:'Geometry',
    Faculty_Rating :this.form,
    wow_assessement_type:'Auto Assessment',
    per_charge:'0.10 ',
    currency:'INR'
  },
      {
      Edited_DateTime:null,
      wow_assignment_name:null,
      Faculty_Rating :'',
      wow_assessement_type:'No Assessment',
      per_charge:'free'
      },

      {
        Edited_DateTime:null,
        wow_assignment_name:null,
        Faculty_Rating :'',
        wow_assessement_type:'Auto Assessment + Manual Assessment',
        per_charge:null,
      },
    ]



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
    'dateAndTime',
    'transactionId',
    'transactionDescription',
    'debitCredit',
    'transactionExecuted',
  ];


  dataSource: MatTableDataSource<PeriodicElement> =
  new MatTableDataSource<PeriodicElement>();
selection = new SelectionModel<PeriodicElement>(true, []);

@ViewChild(MatPaginator) paginator!: MatPaginator;

@ViewChild('paginatorElement', { read: ElementRef })
paginatorHtmlElement!: ElementRef;

rowValue: any[] = [];



isAllSelected() {
  const numSelected = this.selection.selected.length;
  // console.log(this.selection.selected);
  this.rowValue = this.selection.selected;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}


  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.translateMatPaginator(this.paginator);
  }


  ngDoCheck(): void {
    if (this.selection.selected.length <= 0) {
      this.rowValue = [];
    }
  }
  table_json_data: any;

  loadData() {
    // this._apiService
    //   .get_periodic_elements(this['currentPage'], this['pageSize'])

  }

exportReport(fileName: any): void {
  /* pass here the table id */
  let element = document.getElementById('excel_table');
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */
  XLSX.writeFile(wb, fileName);
}


pageChanged(event: PageEvent) {
  // console.log({ event });
  this.pageSize = event.pageSize;
  this.currentPage = event.pageIndex;
  this.loadData();
}
showPageSizeOptions: boolean = true;

// translateMatPaginator(paginator: MatPaginator) {
//   paginator._intl.firstPageLabel = 'First';
//   paginator._intl.itemsPerPageLabel = 'Records Per Page';
//   paginator._intl.lastPageLabel = 'Last';
//   paginator._intl.nextPageLabel = 'Next';
//   paginator._intl.previousPageLabel = 'Previous';
// }

public downloadAsPDF() {
  let pageIndex: number = Number(this.paginator.pageIndex);
  let pageSize: number = Number(this.paginator.pageSize);

  let currentPageEnd = pageSize * (pageIndex + 1);
  let currentPageStart = currentPageEnd - (pageSize - 1);

  const htmlToPrint =
    '' +
    '<style type="text/css">' +
    '.pageFooter {' +
    '    display: table-footer-group;' +
    '    counter-increment: page;' +
    '}' +
    '.pageFooter:after {' +
    '   content: "Page " counter(page)' +
    '}' +
    '</style>';
  var printContents = document.getElementById('pdfTable')!.innerHTML;
  let popupWin: any = window.open(
    'Angular Large Table to pdf',
    '_blank',
    'width=768,height=auto'
  );

  popupWin.document.write(
    '<html><head>' +
      '<link rel="stylesheet" href="' +
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>' +
      '<style type="text/css">' +
      '.pageFooter {' +
      '    display: table-footer-group;' +
      '    counter-increment: page;' +
      '}' +
      '.pageFooter:after {' +
      '   content: "Page Number" counter(page)' +
      '}' +
      '</style>' +
      `</head>

      <body onload="window.print()">
        <style>
        .mat-column-select{display:none}
        </style>

        <div style="width:100%;  display: flex;flex-direction: row;align-items:center; margin-bottom:5px;margin-top:10px">
        <img style="width:100px;height:100px" src="assets/icons/logo.png" alt="app-logo" />
        <div style=" display: flex;flex-direction: column; width:100%">
          <span style="text-align: center;font-size:16px;color:blue;text-size:16px;font-weight:600;text-decoration-line: underline;">GETster.TECH PVT.LTD</span>
          <span style="text-align: center;font-size:16px;color:black;font-weight:600;text-transform: uppercase">Last Ten Transactions</span>
          <span style="text-align: center;font-size:14px;color:black;font-weight:600;">Records : ( ${currentPageStart} - ${currentPageEnd} of ${
        this.paginator.length
      } ) ${
        this.filterValue.length >= 1
          ? `(Filtered by -" ${this.filterValue} ")`
          : ''
      } (${moment().format('D MMM y h:mm a')})</span>
        </div>
        </div>

        ` +
      printContents +
      '</body>' +
      `
        <footer style="position: fixed; bottom: 0; width: 100%;">
        <div style=" display: flex;flex-direction: column; width:100%; align-items:center">
        <span style="text-align: end;font-size:12px;text-size:12px;font-weight:500">Jr Plaza Fourth Floor, Tank Street, </span>
        <span style="text-align: end;font-size:12px;text-size:12px;font-weight:500">Hosur, Tamil Nadu 635109</span>
        </div>
        </footer>
      ` +
      '</html>'
  );
  popupWin.document.close();
}

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
