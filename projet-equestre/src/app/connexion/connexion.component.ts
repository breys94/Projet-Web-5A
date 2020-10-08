import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';

import { UserService } from '../user.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  url = "http://localhost:8080/rest/user/api/login/";
  valid;
  info_login;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient, private userService: UserService ) {

   }

    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  get formControls() { 
    return this.loginForm.controls; 
  }

  mot_de_passe_oublie(){
    this.router.navigateByUrl('/mot_de_passe_oublie');
  }

  seConnecter(login:String, password:String){
    this.isSubmitted = true;

    if(this.loginForm.invalid){
      return;
    }

    let response = this.userService.login(this.loginForm.get("email").value, this.loginForm.get("password").value)
    response.subscribe(userResponse => {
      if (userResponse === 0){
        let user = this.userService.getUser(this.loginForm.get("email").value)
        user.subscribe(userResponse => {
          console.log(userResponse.role)
          if(userResponse.role === "SUPERUSER") this.router.navigateByUrl('/super_user/' + this.loginForm.get("email").value);
        })
      }
      if (userResponse === 3){
        this.valid = false
        this.info_login = "Mot de passe incorrect"
      }
      if (userResponse === 1){
        this.valid = false
        this.info_login = "Login incorrect"
      }
      if (userResponse === 2){
        this.valid = false
        this.info_login = "Utilisateur déjà connecté"
      }
    })

  }

  inscription(){
    this.router.navigateByUrl('/inscription');
  }

}