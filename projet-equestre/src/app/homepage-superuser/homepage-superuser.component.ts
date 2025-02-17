import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage-superuser',
  templateUrl: './homepage-superuser.component.html',
  styleUrls: ['./homepage-superuser.component.css']
})
export class HomepageSuperuserComponent implements OnInit {

  showList: boolean
  showUser:boolean
  listUsers;
  selectedUser;
  email;

  constructor(private router: Router, private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsersRole("ADMIN").subscribe(data => this.listUsers = data);
    this.email = this.route.snapshot.params['email']
  }

  listAdmins(){
    this.showList = true;
  }

  onSelect(user){
    this.showUser = true;
    this.selectedUser = user
  }

  onValid(valid:boolean){
    if(valid === true)this.userService.getUsersRole("ADMIN").subscribe(data => this.listUsers = data);
    this.ngOnInit()
  }

}
