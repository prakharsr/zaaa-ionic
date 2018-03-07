import { Component, OnInit } from '@angular/core';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  // styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private goback:GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
