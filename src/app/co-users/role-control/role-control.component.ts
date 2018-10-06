import { Component, OnInit, Input, Output } from '@angular/core';
import { UserRoles } from '../user-roles';

@Component({
  selector: 'app-role-control',
  templateUrl: './role-control.component.html',
  
})
export class RoleControlComponent implements OnInit {

  @Input() @Output() roles = new UserRoles();

  constructor() { }

  ngOnInit() {
  }

}
