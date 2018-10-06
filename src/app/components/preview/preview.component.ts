import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  
})
export class PreviewComponent implements OnInit {

  content = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
    this.content = data;
  }

  ngOnInit() {
  }

  zoom = false;

}
