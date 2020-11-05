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
  horse;

  noHorse = true;

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
    this.userService.getHorseByEmailUser(this.email).subscribe(
      (data) => {
        this.noHorse = false
        this.horse = data
      },
      (res) => {
        if (res.status === 500){
          this.noHorse = true;
        }
      }
    )
  }

  showHorse(){
    
  }

}
