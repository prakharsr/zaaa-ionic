import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  // 
})
export class AppComponent implements OnInit {

  constructor(public goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
