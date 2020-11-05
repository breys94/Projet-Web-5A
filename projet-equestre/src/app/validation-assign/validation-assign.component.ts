import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from  '@angular/router';

import { horseResponse } from '../response_api/horseResponse';

@Component({
  selector: 'app-validation-assign',
  templateUrl: './validation-assign.component.html',
  styleUrls: ['./validation-assign.component.css']
})
export class ValidationAssignComponent implements OnInit {

  @Input() horse: horseResponse;
  @Input() user: string;
  @Output() valid = new EventEmitter<boolean>();

  email;

  constructor(private userService:UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email']
  }

  validation(){
    this.userService.addUserToHorse(this.user, this.horse.id).subscribe()
    alert("Assignation validée")
    this.goBack()
  }

  goBack(){
    this.valid.emit(true);
  }

}
