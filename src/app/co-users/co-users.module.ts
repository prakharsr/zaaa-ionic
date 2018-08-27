import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';
import { CoUsersRoutingModule } from './co-users-routing.module';

import {
  CoUserComponent,
  CoUsersComponent,
  RoleControlComponent,
  RoleEditComponent,
  CoUserApiService,
  CoUsersResolver
} from '.';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(CoUsersModule),
    CoUsersRoutingModule
  ],
  declarations: [
    CoUsersComponent,
    CoUserComponent,
    RoleControlComponent,
    RoleEditComponent
  ],
  providers: [
    CoUserApiService,
    CoUsersResolver
  ]
})
export class CoUsersModule { }
