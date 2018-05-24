import { GobackService } from 'app/services';
import { Component, OnInit, HostBinding } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  // 
})
export class EmptyComponent implements OnInit {

  constructor(public goback: GobackService, public navCtrl: NavController, private winRef: WindowService, public navParams: NavParams) { }

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
