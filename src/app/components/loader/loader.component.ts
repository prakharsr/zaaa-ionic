import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@aaman/main/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  
})
export class LoaderComponent implements OnInit {

  constructor(public goback: GobackService, public loaderService: LoaderService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
