import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assgin-without-payment-dialog',
  templateUrl: './assgin-without-payment-dialog.component.html',
  styleUrls: ['./assgin-without-payment-dialog.component.scss']
})
export class AssginWithoutPaymentDialogComponent implements OnInit {


  constructor(

    public auditTrailDialogRef: MatDialogRef<AssginWithoutPaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }


 public cancelN(){
  this.auditTrailDialogRef.close(true)
}
}
