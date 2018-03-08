import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnimation } from '../../animations';
import { NavController, NavParams } from 'ionic-angular';
import { WindowService } from '../../services/window.service';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-empty',
  animations: [routerAnimation],
  templateUrl: './empty.component.html',
  // styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  constructor(public navCtrl: NavController, private winRef: WindowService, public navParams: NavParams, private goback:GobackService) { }

  @HostBinding('@routeAnimation') routeAnimation = true;

  ngOnInit() {
    this.goback.urlInit();
  }

  ionViewWillEnter() {
    this.navCtrl.pop().then(p=>
    {
      this.winRef.window.location.assign("index.html#/");
    })
  }

}
