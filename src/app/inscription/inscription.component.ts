import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) {

  }

  ngOnInit() {
    this.inscriptionForm  =  this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', Validators.required],
        telephone: ['', Validators.required],
        password: ['', Validators.required]
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
  }

}
