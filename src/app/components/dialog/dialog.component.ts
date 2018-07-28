import { GobackService } from 'app/services';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  
})
export class DialogComponent implements OnInit {

  constructor(public goback: GobackService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
