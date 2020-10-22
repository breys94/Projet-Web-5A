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
import { PageUpdateUserComponent } from './page-update-user/page-update-user.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { CreateHorseComponent } from './create-horse/create-horse.component';
import { PageCreateHorseComponent } from './page-create-horse/page-create-horse.component'


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
    PageUpdateUserComponent,
    ShowuserComponent,
    CreateHorseComponent,
    PageCreateHorseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }