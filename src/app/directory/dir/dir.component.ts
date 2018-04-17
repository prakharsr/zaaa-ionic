import { Component, OnInit } from '@angular/core';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  // styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {

  constructor(public goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
