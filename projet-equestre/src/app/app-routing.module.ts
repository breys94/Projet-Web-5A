import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './auth.guard';
import { InscriptionComponent } from './inscription/inscription.component';
import { PassOublieComponent } from './pass-oublie/pass-oublie.component';
import { DemandeCodeComponent } from './demande-code/demande-code.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomepageSuperuserComponent } from './homepage-superuser/homepage-superuser.component'
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component'
import { HomepageMonitorComponent } from './homepage-monitor/homepage-monitor.component'
import { HomepageHorseriderComponent } from './homepage-horserider/homepage-horserider.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'mot_de_passe_oublie', component: PassOublieComponent },
  { path: 'demande_code/:email', component: DemandeCodeComponent },
  { path: 'change_password/:email', component: ChangePasswordComponent},
  { path: 'super_user/:email', component: HomepageSuperuserComponent},
  { path: 'admin/:email', component: HomepageAdminComponent},
  { path: 'monitor/:email', component: HomepageMonitorComponent},
  { path: 'user/:email', component: HomepageHorseriderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }