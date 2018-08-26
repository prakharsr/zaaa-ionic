import { GobackService } from 'app/services';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  
})
export class PreviewComponent implements OnInit {

  content = "";

  constructor(public goback: GobackService, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.content = data;
  }

  ngOnInit() {
    this.goback.urlInit();
  }

}
