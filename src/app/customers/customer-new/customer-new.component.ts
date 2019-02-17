import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent implements OnInit {
  emailFormCtrl: FormControl;
  FirstCtrl: FormControl;
  LastCtrl: FormControl;
  AddressCtrl: FormControl;
  PhoneCtrl: FormControl;
  matcher: any;
  constructor(private mDialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.emailFormCtrl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.FirstCtrl = new FormControl('', [
      Validators.required
    ]);
    this.LastCtrl = new FormControl('', [
      Validators.required
    ]);
    this.AddressCtrl = new FormControl('', [
      Validators.required
    ]);
    this.PhoneCtrl = new FormControl('', [
      Validators.required
    ]);
  }

  openRepDialog() {
    const dialogRef = this.mDialog.open(RepDialogComponent, {
      width: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(res => {
      alert(`user choosed ${res}`)
    })
  }

  openSnackbar() {
    const refSnackbar = this.snackbar.open("Customer Saved", "UNDO", {
      horizontalPosition:'end',
      duration: 2000
    });

    refSnackbar.onAction().subscribe(()=>{
        alert('undo that saved');
    });
  }

}
