import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-pass-oublie',
  templateUrl: './pass-oublie.component.html',
  styleUrls: ['./pass-oublie.component.css']
})
export class PassOublieComponent implements OnInit {

  resetForm: FormGroup;
  isSubmitted  =  false;
  url = "http://localhost:8080/rest/user/api/sendEmail/";

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

  sendEmail(){
    this.isSubmitted = true;
    if(this.resetForm.invalid){
      return;
    }
    this.router.navigateByUrl('/connexion');
  }

  goBack(){
    this.router.navigateByUrl('/connexion');
  }

}
