import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-show-reprise-by-monitor',
  templateUrl: './show-reprise-by-monitor.component.html',
  styleUrls: ['./show-reprise-by-monitor.component.css']
})
export class ShowRepriseByMonitorComponent implements OnInit {

  listReprises;
  listReprisesInit = [];
  listHorses;
  showReprise:boolean
  selectedReprise;
  email;

  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email']
    this.userService.getReprises().subscribe(
      data => {
        this.listReprises = data
        for (let i = 0; i < this.listReprises.length; i++) {
          if(this.listReprises[i].emailMonitor === this.email) this.listReprisesInit.push(this.listReprises[i])
        }
        this.listReprises = this.listReprisesInit
      }
    );
  }

  onSelect(reprise){
    this.selectedReprise=reprise
    this.showReprise = true;
  }

  onValid(valid:boolean){
    if(valid === true) this.showReprise = false;
  }

}
