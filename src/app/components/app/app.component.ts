import { Component, OnInit } from '@angular/core';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
