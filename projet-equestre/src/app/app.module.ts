import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PassOublieComponent } from './pass-oublie/pass-oublie.component';
import { DemandeCodeComponent } from './demande-code/demande-code.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomepageSuperuserComponent } from './homepage-superuser/homepage-superuser.component';
import { ShowadminComponent } from './showadmin/showadmin.component';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';
import { PageSearchUserComponent } from './page-search-user/page-search-user.component';
import { PageCreateUserComponent } from './page-create-user/page-create-user.component';
import { PageUnlockUserComponent } from './page-unlock-user/page-unlock-user.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { PageCreateHorseComponent } from './page-create-horse/page-create-horse.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { HomepageMonitorComponent } from './homepage-monitor/homepage-monitor.component';
import { PageCreateRepriseComponent } from './page-create-reprise/page-create-reprise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomepageHorseriderComponent } from './homepage-horserider/homepage-horserider.component';
import { PageSearchRepriseComponent } from './page-search-reprise/page-search-reprise.component';
import { ShowRepriseComponent } from './show-reprise/show-reprise.component';
import { ShowRepriseByMonitorComponent } from './show-reprise-by-monitor/show-reprise-by-monitor.component';
import { ShowRepriseAssignComponent } from './show-reprise-assign/show-reprise-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AdminComponent,
    InscriptionComponent,
    PassOublieComponent,
    DemandeCodeComponent,
    ChangePasswordComponent,
    HomepageSuperuserComponent,
    ShowadminComponent,
    HomepageAdminComponent,
    PageSearchUserComponent,
    PageCreateUserComponent,
    PageUnlockUserComponent,
    ShowuserComponent,
    PageCreateHorseComponent,
    PageProfileComponent,
    HomepageMonitorComponent,
    PageCreateRepriseComponent,
    HomepageHorseriderComponent,
    PageSearchRepriseComponent,
    ShowRepriseComponent,
    ShowRepriseByMonitorComponent,
    ShowRepriseAssignComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }