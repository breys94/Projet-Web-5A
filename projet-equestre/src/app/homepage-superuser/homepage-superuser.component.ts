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
  listUsers;

  constructor(private router: Router, private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.listUsers = data);
  }

  listAdmins(){
    this.showList = true;
  }

  onSelect(user){
    console.log(user)
  }

}
