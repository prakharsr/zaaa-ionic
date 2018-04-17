import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor(public api: ApiService, public goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
