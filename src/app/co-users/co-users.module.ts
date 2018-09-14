import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import {
  CoUserComponent,
  CoUsersComponent,
  RoleControlComponent,
  RoleEditComponent,
} from '.';
import { CoUsersRoutingModule } from './co-users-routing.module';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(CoUsersModule)
  ],
  declarations: [
    CoUsersComponent,
    CoUserComponent,
    RoleControlComponent,
    RoleEditComponent
  ]
})
export class CoUsersModule { }
