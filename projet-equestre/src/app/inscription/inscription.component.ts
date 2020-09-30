import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
        email: ['', Validators.required],
        telephone: ['', Validators.required],
        password: ['', Validators.required],
        licence: [''],
        passwdconfirm: [''],
        isMonitor: ['']
    });

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
