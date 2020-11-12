import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class PageCreateRepriseComponent implements OnInit, OnChanges {

  createForm: FormGroup;
  isSubmitted  =  false;
  email;
  idUser;
  invalidDate;

  pipe = new DatePipe('en-US');

  constructor(private formBuilder: FormBuilder, private UserService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm  =  this.formBuilder.group({
      title: [''],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      level: ['Galop 1', Validators.required],
      nbHorseRider: ['1', Validators.compose([Validators.required, Validators.pattern("^[0-9]{1,2}")])],
      recur:[],
      nbRecur:[],
      });
      this.email = this.route.snapshot.params['email']
  }

  get formControls() { 
    return this.createForm.controls; 
  }

  ngOnChanges(changes: SimpleChanges): void { 
    console.log(changes.test.currentValue)
  }

  create(){
    this.isSubmitted = true;
    if(this.createForm.invalid){
      return;
    }

    let recur = this.createForm.get('recur').value
    let nbRecur = this.createForm.get('nbRecur').value
    let beginDateformatted = this.pipe.transform(this.createForm.get("beginDate").value, 'yyyy-MM-dd');
    let endDateformatted = this.pipe.transform(this.createForm.get("endDate").value, 'yyyy-MM-dd');
    let title = this.createForm.get("title").value
    let level = this.createForm.get("level").value
    let nbHr = this.createForm.get("nbHorseRider").value

    if(beginDateformatted !== endDateformatted && (recur === '1' || recur === '2')){
      this.invalidDate = true;
      return;
    }

    this.invalidDate = false;

    let resp;

    if(recur === '0' || recur === null){
      resp = this.UserService.addReprise(this.email, title, level, beginDateformatted, endDateformatted, nbHr)
    }
    if(recur === '1'){
      resp = this.UserService.addRepriseRecur(nbRecur,"day",this.email, title, level, beginDateformatted, endDateformatted, nbHr)
    }
    if(recur === '2'){
      resp = this.UserService.addRepriseRecur(nbRecur,"week", this.email, title, level, beginDateformatted, endDateformatted, nbHr)
    }

    resp.subscribe(
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
