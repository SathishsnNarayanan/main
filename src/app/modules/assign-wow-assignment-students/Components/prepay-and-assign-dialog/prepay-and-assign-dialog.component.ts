import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prepay-and-assign-dialog',
  templateUrl: './prepay-and-assign-dialog.component.html',
  styleUrls: ['./prepay-and-assign-dialog.component.scss']
})
export class PrepayAndAssignDialogComponent implements OnInit {

  constructor(
    private dialog:MatDialog,

    public auditTrailDialogRef: MatDialogRef<PrepayAndAssignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

 public cancelN(){
  this.auditTrailDialogRef.close(true)
}
}
