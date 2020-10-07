import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { AuthService } from  '../auth.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-demande-code',
  templateUrl: './demande-code.component.html',
  styleUrls: ['./demande-code.component.css']
})
export class DemandeCodeComponent implements OnInit {

  codeForm: FormGroup;
  isSubmitted  =  false;
  email: string;
  valid=true;

  public bddCode;

  constructor(private router: Router, private httpClient: HttpClient, private formBuilder: FormBuilder, private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.codeForm = this.formBuilder.group({
      "code": [""],
    })
    this.email = this.route.snapshot.params['email']
    this.userService.getUser(this.email).subscribe(data => this.bddCode = data.tmpCode);
  }

  goBack(){
    this.router.navigateByUrl('/connexion');
  }

  checkCode(){
    this.isSubmitted  =  true;
    let code = this.codeForm.get("code").value
    console.log(code, this.bddCode)
    if(code === this.bddCode) this.router.navigateByUrl('/change_password/' + this.email);
    else this.valid=false
  }

  get formControls() { 
    return this.codeForm.controls; 
  }

}
