import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';

import { UserService } from '../user.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  url = "http://localhost:8080/rest/user/api/login/";

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

    this.userService.login(this.loginForm.get("email").value, this.loginForm.get("password").value)

  }

  inscription(){
    this.router.navigateByUrl('/inscription');
  }

}