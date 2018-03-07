import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import { FirmProfileEditComponent } from './firm-profile-edit/firm-profile-edit.component';
import { NewCoUserComponent } from './new-co-user/new-co-user.component';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { RoleControlComponent } from './role-control/role-control.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { TemplateSelectorItemComponent } from './template-selector-item/template-selector-item.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { EmptyComponent } from './empty/empty.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule.forRoot(AdminModule),
    BaseModule
  ],
  declarations: [
    FirmProfileEditComponent,
    NewCoUserComponent,
    PlanSelectorComponent,
    ProfileEditComponent,
    RoleControlComponent,
    RoleEditComponent,
    TemplateSelectorItemComponent,
    TemplateSelectorComponent,
    EmptyComponent
  ]
})
export class AdminModule { }
