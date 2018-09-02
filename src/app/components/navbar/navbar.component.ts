import { GobackService, NotificationService } from 'app/services';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile, Firm } from '../../models';
import { DashboardComponent } from '..';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { NotificationsComponent } from '../notifications/notifications.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // 
})
export class NavbarComponent implements OnInit {

  @ViewChild('notifyBtn', {read: ElementRef}) notifyBtn: ElementRef;
  
  constructor(
    public goback: GobackService, 
    public api: ApiService,
    private route: ActivatedRoute,
    private notifications: NotificationService,
    private overlay: Overlay,
    public fcm: FCM) { }

  profile = new Firm();

  overlayRef: OverlayRef;


  ngOnInit() {
    this.goback.urlInit();
    if(this.api.isLoggedIn) 
    {
      this.api.getFirmProfile().subscribe(data => this.profile = data);
    }
  }

  logout() {
    this.fcm.getToken().then(token => {
      this.api.logoutSendToken(token).subscribe( data => {
        if(data.success) {
          console.log("token sent successfully, token: "+ data);
        }
        else {
          console.log("token couldnot be sent");
        }

      });
    });

    this.api.logout();
  }

  openNotifications() {
    if (this.overlayRef) {
      this.closeNotifications();
    }
    else {
      this.overlayRef = this.overlay.create({
        width: '300px',
        height: '450px',
        hasBackdrop: true,
        backdropClass: 'mat-overlay-transparent-backdrop',
        panelClass: ['mat-elevation-z8', 'bg-light'],
        positionStrategy: this.overlay.position()
          .connectedTo(this.notifyBtn,
            { originX: 'start', originY: 'bottom' },
            { overlayX: 'start', overlayY: 'top' }
          ).withDirection('rtl')
      });
      let portal = new ComponentPortal(NotificationsComponent);
      this.overlayRef.attach(portal);

      this.overlayRef.backdropClick().subscribe(() => this.closeNotifications());
    }
  }

  closeNotifications() {
    this.overlayRef.dispose();

    this.overlayRef = null;
  }

}