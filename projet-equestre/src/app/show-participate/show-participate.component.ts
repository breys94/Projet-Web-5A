import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from  '@angular/router';


@Component({
  selector: 'app-show-participate',
  templateUrl: './show-participate.component.html',
  styleUrls: ['./show-participate.component.css']
})
export class ShowParticipateComponent implements OnInit {

  email;
  listReprises;
  listReprisesUser = [];

  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email']
    this.userService.getRepriseByUser(this.email).subscribe(
      data => {
        this.listReprises = data
        for (let i = 0; i < this.listReprises.length; i++) {
          this.userService.getRepriseById(this.listReprises[i].idReprise).subscribe(
            data2 => {
              this.listReprisesUser.push(data2)
            }
          )
        }
      }
    )
  }

}
