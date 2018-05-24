import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';
import { DirRoutingModule } from './dir-routing.module';

import {
  DirComponent,

  ClientListComponent,
  ClientComponent,
  ClientDetailsComponent,
  ClientResolver,
  ClientListResolver,
  ClientApiService,

  ExecutiveListComponent,
  ExecutiveComponent,
  ExecutiveDetailsComponent,
  ExecutiveResolver,
  ExecutiveListResolver,
  ExecutiveApiService,

  MediaHouseListComponent,
  MediaHouseComponent,
  MediaHouseDetailsComponent,
  MediaHouseResolver,
  MediaHouseListResolver,
  MediaHouseApiService
} from '.';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule.forRoot(DirectoryModule),
    BaseModule,
    DirRoutingModule
  ],
  declarations: [
    ClientComponent,
    ExecutiveComponent,
    MediaHouseComponent,
    DirComponent,
    ClientListComponent,
    ClientDetailsComponent,
    ExecutiveListComponent,
    ExecutiveDetailsComponent,
    MediaHouseListComponent,
    MediaHouseDetailsComponent
  ],
  providers: [
    ClientApiService,
    ExecutiveApiService,
    MediaHouseApiService,
    ClientResolver,
    ExecutiveResolver,
    MediaHouseResolver,
    ClientListResolver,
    ExecutiveListResolver,
    MediaHouseListResolver
  ]
})
export class DirectoryModule { }
