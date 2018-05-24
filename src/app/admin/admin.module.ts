import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import {
  FirmProfileEditComponent,
  PlanSelectorComponent,
  TemplateSelectorItemComponent,
  TemplateSelectorComponent,
  ProfileEditComponent,
  EmptyComponent
} from '.';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule.forRoot(AdminModule),
    BaseModule
  ],
  declarations: [
    EmptyComponent,

    FirmProfileEditComponent,
    PlanSelectorComponent,
    TemplateSelectorItemComponent,
    TemplateSelectorComponent,
    ProfileEditComponent
  ]
})
export class AdminModule { }
