import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  
})
export class DirComponent implements OnInit {

  constructor(public goback: GobackService, ) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
