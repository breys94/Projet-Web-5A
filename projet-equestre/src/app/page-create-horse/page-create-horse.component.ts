import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { AuthService } from  '../auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';



@Component({
  selector: 'app-page-create-horse',
  templateUrl: './page-create-horse.component.html',
  styleUrls: ['./page-create-horse.component.css']
})
export class PageCreateHorseComponent implements OnInit {

  createForm: FormGroup;
  jsonToSend;
  isSubmitted  =  false;
  conflictName = false;
  valid = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private httpClient: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.createForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      sexe: ['MALE', Validators.required],
      age: ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{1,2}")])],
      weight: ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{1,3}")])],
      height:  ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{1,3}")])],
      wins:  ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{1,3}")])],
      loses:  ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]{1,3}")])],
      });
  }

  create(){
    this.isSubmitted = true;
    if(this.createForm.invalid){
      this.valid = false
      return;
    }

    this.valid = true

    const name = this.createForm.get("name").value
    const sexe = this.createForm.get("sexe").value
    const age = this.createForm.get("age").value
    const weight = this.createForm.get("weight").value
    const height = this.createForm.get("height").value
    const wins = this.createForm.get("wins").value
    const loses = this.createForm.get("loses").value

    console.log(name, sexe, age, weight, height, wins, loses)

    this.userService.addHorse(name, sexe, age, weight, height, wins, loses).subscribe(
      () => {
        console.log(console.log("Succès"));
        alert("Création réussie")
        this.createForm.reset()
        this.isSubmitted = false;
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
