import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { userResponse } from '../response_api/userResponse';

@Component({
  selector: 'app-pass-oublie',
  templateUrl: './pass-oublie.component.html',
  styleUrls: ['./pass-oublie.component.css']
})
export class PassOublieComponent implements OnInit {

  resetForm: FormGroup;
  isSubmitted  =  false;
  url = "http://localhost:8080/rest/user/api/sendEmail/";
  subject = "Réinitialisation de mot de passe"
  content = "Bonjour __NAME__,\n Voici votre code pour réinitialiser votre mot de passe :\n __CODE__ \n\nCordialement,\n Breys Equestre"

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient ) {

  }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      "email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
    })
  }

  get formControls() { 
    return this.resetForm.controls; 
  }

  isUserExists(){
    this.isSubmitted = true;
    if(this.resetForm.invalid){
      return;
    }

    let url = "http://localhost:8080/rest/user/api/searchUser/";
    let param = new HttpParams().set('login', this.resetForm.get("email").value)
    this.httpClient.get<userResponse>(url, {params:param}).subscribe(userResponse => {
      console.log(userResponse)
      if(userResponse === null)console.log(false)
      else this.sendEmail(userResponse.firstName)
    });
  }

  sendEmail(name:string){

    this.router.navigateByUrl('/demande_code/' + this.resetForm.get("email").value);

    let code = Math.floor(Math.random() * (999999 - 100000));
    let jsonToSend = {emailUser:this.resetForm.get("email").value, emailSubject:this.subject, code:code, emailContent:this.content.replace("__CODE__",code.toString()).replace("__NAME__", name)}

    console.log(jsonToSend)
    
    this.httpClient.post(this.url, jsonToSend).subscribe(
      () => {
        console.log("Succès");
      }, 
      (res) => {
        console.log("Erreur " + res.status)
      },
    )
  }
}
