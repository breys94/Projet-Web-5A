import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
  url = "http://localhost:8080/rest/user/api/addUser/";
  jsonToSend;
  isSubmitted  =  false;
  moniteur = false
  
  constructor(private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {
    this.inscriptionForm  =  this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ["", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
        telephone: ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{10}")])],
        password:  ["", Validators.compose([Validators.required, Validators.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))])],
        licence: [''],
        passwdconfirm: ['', Validators.required],
        isMonitor: ['']
    },{
      validators: ConfirmedValidator('password', 'passwdconfirm')
    }
    );
  }

  get password() {
    return this.inscriptionForm.get('password');
  }

  get telephone() {
    return this.inscriptionForm.get('telephone');
  }

  get passwdconfirm() {
    return this.inscriptionForm.get('passwdconfirm');
  }

  checkPasswords(password:String, confpassword:String) {
    let pass = password;
    let passwdconfirm = confpassword;
    console.log(pass, passwdconfirm)
    return pass === passwdconfirm ? null : { notSame: true }     
}

  get formControls() { 
    return this.inscriptionForm.controls; 
  }

  inscrire(){
    this.isSubmitted = true;
    if(this.inscriptionForm.invalid){
      return;
    }

    const name = this.inscriptionForm.get("name").value
    const surname = this.inscriptionForm.get("surname").value
    const email = this.inscriptionForm.get("email").value
    const passwd = this.inscriptionForm.get("password").value
    const phone = this.inscriptionForm.get("telephone").value
    const licence = this.inscriptionForm.get("licence").value
    const isMonitor = this.inscriptionForm.get("isMonitor").value

    if (isMonitor === true){
      this.jsonToSend = {firstName:name, lastName:surname, email:email, password:passwd, phone:phone, licence:licence, role:"USER_MONITOR"}
    }
    else{
      this.jsonToSend = {firstName:name, lastName:surname, email:email, password:passwd, phone:phone, licence:licence, role:"USER"}
    }

    console.log(this.jsonToSend)
    this.httpClient.post(this.url, this.jsonToSend).subscribe(
      () => {
        console.log(console.log("Succès"));
        this.router.navigateByUrl('/connexion');
      }, 
      (res) => {
        console.log("Erreur " + res.status)
        if (res.status === 409){
          console.log("Le compte existe déjà !")
        }
      },
    )
  }

}
