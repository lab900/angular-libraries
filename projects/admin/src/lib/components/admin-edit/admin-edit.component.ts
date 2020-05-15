import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lab900-admin-edit',
  templateUrl: './admin-edit.component.html',
})
export class AdminEditComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AdminEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  onConfirmClick(): void {
    // get dialog content and invoke create action
    this.dialogRef.close(true);
  }
}
