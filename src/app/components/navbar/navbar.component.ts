import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '@aaman/main/user-profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // 
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;
  admin: boolean;

  constructor(public goback: GobackService,private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { user: UserProfile }) => {
      this.admin = data.user.isAdmin;
    });
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
