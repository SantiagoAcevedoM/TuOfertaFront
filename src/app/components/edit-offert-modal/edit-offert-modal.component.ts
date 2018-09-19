import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-offert-modal',
  templateUrl: './edit-offert-modal.component.html',
  styleUrls: ['./edit-offert-modal.component.css']
})
export class EditOffertModalComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditOffertModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { 
    
    this.form = formBuilder.group({
        productName: [null], 
        productPrice:[null], 
        productDetail:[null], 
        discount:[null]})
  }

  ngOnInit() {
  }

}
