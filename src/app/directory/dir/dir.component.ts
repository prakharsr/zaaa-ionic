import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnimation } from '../../animations';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-dir',
  animations: [routerAnimation],
  templateUrl: './dir.component.html',
  // styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(private goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
