import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-page-create-user',
  templateUrl: './page-create-user.component.html',
  styleUrls: ['./page-create-user.component.css']
})
export class PageCreateUserComponent implements OnInit {

  createForm: FormGroup;
  url = "http://localhost:8080/rest/user/api/addUser/";
  jsonToSend;
  isSubmitted  =  false;
  moniteur = false
  conflictMail = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.createForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      phone: ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{10}")])],
      password:  ["", Validators.compose([Validators.required, Validators.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))])],
      licence: [''],
      selectedRole: ['Administrateur']
      });
  }

  get formControls() { 
    return this.createForm.controls; 
  }

  get password() {
    return this.createForm.get('password');
  }

  get phone() {
    return this.createForm.get('phone');
  }

  create(){
    this.isSubmitted = true;
    if(this.createForm.invalid){
      return;
    }

    const name = this.createForm.get("name").value
    const lastname = this.createForm.get("lastname").value
    const email = this.createForm.get("email").value
    const passwd = this.createForm.get("password").value
    const phone = this.createForm.get("phone").value
    const licence = this.createForm.get("licence").value
    const isMonitor = this.createForm.get("selectedRole").value

    if (isMonitor === "Moniteur"){
      this.jsonToSend = {firstName:name, lastName:lastname, email:email, password:passwd, phone:phone, licence:licence, role:"USER_MONITOR"}
    }
    else{
      this.jsonToSend = {firstName:name, lastName:lastname, email:email, password:passwd, phone:phone, licence:licence, role:"ADMIN"}
    }

    console.log(this.jsonToSend)
    this.httpClient.post(this.url, this.jsonToSend).subscribe(
      () => {
        console.log(console.log("Succès"));
        this.createForm.reset()
        this.conflictMail = false;
        this.isSubmitted = false;
      }, 
      (res) => {
        console.log("Erreur " + res.status)
        if (res.status === 409){
          console.log("Le compte existe déjà !")
          this.conflictMail = true;
        }
      },
    )

  }

}
