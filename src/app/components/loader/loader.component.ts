import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
  }

}
