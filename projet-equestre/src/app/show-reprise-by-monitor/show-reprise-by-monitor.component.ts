import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from  '@angular/router';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

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

  beginDateFormatted;
  endDateFormatted;

  pipe = new DatePipe('fr');

  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email']
    this.userService.getReprises24Hours().subscribe(
      data => {
        this.listReprises = data
        for (let i = 0; i < this.listReprises.length; i++) {
          if(this.listReprises[i].emailMonitor === this.email){
            this.listReprises[i].beginDate = this.pipe.transform(this.listReprises[i].beginDate, 'shortDate');
            this.listReprises[i].endDate = this.pipe.transform(this.listReprises[i].endDate, 'shortDate');
            this.listReprisesInit.push(this.listReprises[i])
          }
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
    this.ngOnInit()
  }

}
