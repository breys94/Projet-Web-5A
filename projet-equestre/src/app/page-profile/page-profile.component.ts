import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

  user;
  email;
  updateForm: FormGroup;
  ok;
  conflictMail;
  conflictPhone;

  constructor(private userService:UserService, private formBuilder: FormBuilder, private httpClient: HttpClient, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      "email": ['test', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      "lastName": [''],
      "firstName": [''],
      "phone": ['', Validators.pattern("^[0-9]{10}")],
      "licence": [''],
      })
    this.email = this.route.snapshot.params['email']
    this.userService.getUser(this.email).subscribe(
      data => {
      this.user = data
      this.updateForm.get("email").setValue(data.email)
      this.updateForm.get("phone").setValue(data.phone)
      this.updateForm.get("lastName").setValue(data.lastName)
      this.updateForm.get("firstName").setValue(data.firstName)
      }
    );
  }

  updateUser(){
    let response = this.userService.updateUser(
      this.user.id,
      this.updateForm.get("email").value,
      this.updateForm.get("firstName").value, 
      this.updateForm.get("lastName").value, 
      this.updateForm.get("phone").value
      ).subscribe(userResponse => {
       if (userResponse === 0){
         this.ok = true
         alert("Modification effectuée")
         if(this.user.role === "ADMIN") this.router.navigateByUrl('/admin/' + this.updateForm.get("email").value);
         if(this.user.role === "USER_MONITOR") this.router.navigateByUrl('/monitor/' + this.updateForm.get("email").value);
       }
       if (userResponse === 1){
         this.conflictMail = true
         this.conflictPhone = false
         this.ok = false
       }
       if (userResponse === 2){
         this.conflictPhone = true
         this.conflictMail = false
         this.ok = false
       }
     })
  }

  get formControls() { 
    return this.updateForm.controls; 
  }

}
