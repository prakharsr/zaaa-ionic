import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AdCategoriesComponent } from './ad-categories/ad-categories.component';
import { SuperAdminGuard } from './super-admin-guard.service';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { DirectoryModule } from 'app/directory/directory.module';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule.forRoot(SuperAdminModule),
    BaseModule,
    DirectoryModule,
    SuperAdminRoutingModule
  ],
  declarations: [
    AdCategoriesComponent,
    SuperAdminDashboardComponent,
    SuperAdminLoginComponent,
    CreateAdminComponent
  ],
  providers: [
    SuperAdminGuard
  ]
})
export class SuperAdminModule { }
