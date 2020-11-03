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

  inputReprise;

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

    this.userService.getHorses().subscribe(
      data => {
        this.listHorses = data
      }
    );
  }

  onSelect(reprise){
    this.selectedReprise=reprise
    //console.log(this.listHorses.length)
    //console.log(reprise.nbHorseRider)
    if(this.listHorses.length >= 1 && reprise.nbHorseRider >= 3)this.inputReprise = "repriseOk"
    if(this.listHorses.length >= 1 && reprise.nbHorseRider < 3)this.inputReprise = "repriseCancel"
    if(this.listHorses.length === 0)this.inputReprise = "repriseNeedsHorses"
    this.showReprise = true;
  }

  onValid(valid:boolean){
    if(valid === true) this.showReprise = false;
  }

}
