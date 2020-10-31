import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-page-create-reprise',
  templateUrl: './page-create-reprise.component.html',
  styleUrls: ['./page-create-reprise.component.css']
})
export class PageCreateRepriseComponent implements OnInit {

  createForm: FormGroup;
  isSubmitted  =  false;
  email;
  idUser;

  pipe = new DatePipe('en-US');

  constructor(private formBuilder: FormBuilder, private UserService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm  =  this.formBuilder.group({
      title: [''],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      level: ['Galop 1', Validators.required],
      nbHorseRider: ['1', Validators.compose([Validators.required, Validators.pattern("^[0-9]{1,2}")])],
      });
      this.email = this.route.snapshot.params['email']
      this.UserService.getUser(this.email).subscribe(data => this.idUser = data.id);
  }

  get formControls() { 
    return this.createForm.controls; 
  }

  create(){
    this.isSubmitted = true;
    if(this.createForm.invalid){
      return;
    }

    let beginDateformatted = this.pipe.transform(this.createForm.get("beginDate").value, 'yyyy-MM-dd');
    let endDateformatted = this.pipe.transform(this.createForm.get("endDate").value, 'yyyy-MM-dd');
    let title = this.createForm.get("title").value
    let level = this.createForm.get("level").value
    let nbHr = this.createForm.get("nbHorseRider").value

    this.UserService.addReprise(this.idUser, title, level, beginDateformatted, endDateformatted, nbHr).subscribe(
      () => {
        console.log(console.log("Succès"));
        alert("Création réussie")
        this.createForm.reset()
        this.isSubmitted = false;
      }, 
      (res) => {
        console.log("Erreur " + res.status)
        if (res.status === 409){
          console.log("Le cours existe déjà !")
        }
      },

    )
  }

}
