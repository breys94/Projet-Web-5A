import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { userResponse } from '../response_api/userResponse';
import { Router, ActivatedRoute } from  '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit, OnChanges {

  @Input() user: userResponse;
  @Output() valid = new EventEmitter<boolean>();
  updateForm: FormGroup;
  arrayUser;
  conflictMail:boolean
  conflictPhone:boolean
  ok:boolean
  email;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
	this.arrayUser = Object.keys(this.user).map(key => ({type: key, value: this.user[key]}));
	this.updateForm = this.formBuilder.group({
		"email": [this.arrayUser[4].value, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
		"lastName": [this.arrayUser[1].value],
		"firstName": [this.arrayUser[2].value],
		"phone": [this.arrayUser[3].value, Validators.pattern("^[0-9]{10}")],
    })
    this.email = this.route.snapshot.params['email']
  }

  ngOnChanges(): void { 
    this.arrayUser = Object.keys(this.user).map(key => ({type: key, value: this.user[key]}));
  }

  get formControls() { 
    return this.updateForm.controls; 
  }

  goBack(){
    this.valid.emit(true);
  }

}
