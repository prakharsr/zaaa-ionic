import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  
})
export class NotFoundComponent implements OnInit {

  constructor(public goback: GobackService, ) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
