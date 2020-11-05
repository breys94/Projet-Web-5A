import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page-search-user',
  templateUrl: './page-search-user.component.html',
  styleUrls: ['./page-search-user.component.css']
})
export class PageSearchUserComponent implements OnInit {

  listUsers;
  listUsersInit;
  showUser:boolean
  selectedUser;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
      this.listUsers = data
      this.listUsersInit = data
      }
    );
  }

  getSearch(item){
    this.listUsers = this.listUsersInit
    let tmpList = []
    for (let i = 0; i < this.listUsers.length; i++) {
      if(this.listUsers[i].email.indexOf(item.target.value) !== -1) {
        tmpList.push(this.listUsers[i])
      }
    }
    this.listUsers = tmpList
  }

  onSelect(user){
    this.showUser = true;
    this.selectedUser = user
  }

  onValid(valid:boolean){
    if(valid === true) this.showUser = false;
    this.ngOnInit()
  }

}
