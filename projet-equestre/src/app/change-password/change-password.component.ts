import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';

import { ConfirmedValidator } from '../inscription/confirmed.validator';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  finalForm: FormGroup;
  isSubmitted  =  false;
  email:string;

  constructor(private router: Router, private httpClient: HttpClient, private formBuilder: FormBuilder, private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.finalForm  =  this.formBuilder.group({
        password:  ["", Validators.compose([Validators.required, Validators.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))])],
        confirmPassword: ['', Validators.required],
    },{
      validators: ConfirmedValidator('password', 'confirmPassword')
    }
    );
    this.email = this.route.snapshot.params['email']
  }

  changePassword(){
    this.isSubmitted = true;

    if(this.finalForm.invalid){
      return;
    }

    let response = this.userService.updatePassword(this.email, this.finalForm.get("password").value)
    response.subscribe(
      () => {
        console.log(console.log("Succès"));
        this.router.navigateByUrl('/connexion');
      }, 
      (res) => {
        if(res.status === 201)this.router.navigateByUrl('/connexion')
      }
    )

  }

  get password() {
    return this.finalForm.get('password');
  }

  get formControls() { 
    return this.finalForm.controls; 
  }

}
