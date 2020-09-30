import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './auth.guard';
import { InscriptionComponent } from './inscription/inscription.component';
import { PassOublieComponent } from './pass-oublie/pass-oublie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'mot_de_passe_oublie', component: PassOublieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }