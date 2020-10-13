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
import { ShowadminComponent } from './showadmin/showadmin.component'


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
    ShowadminComponent
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