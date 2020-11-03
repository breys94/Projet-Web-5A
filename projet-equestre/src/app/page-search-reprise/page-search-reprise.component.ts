import { Component, OnInit } from '@angular/core';
import { cpuUsage } from 'process';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page-search-reprise',
  templateUrl: './page-search-reprise.component.html',
  styleUrls: ['./page-search-reprise.component.css']
})
export class PageSearchRepriseComponent implements OnInit {

  listReprises;
  listReprisesInit;
  showReprise:boolean
  selectedReprise;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getReprises().subscribe(
      data => {
        this.listReprises = data
        this.listReprisesInit = data
      }
    );
  }

  getSearchLevel(item){
    this.listReprises = this.listReprisesInit
    let tmpList = []
    for (let i = 0; i < this.listReprises.length; i++) {
      if(this.listReprises[i].level.indexOf(item.target.value) !== -1) {
        tmpList.push(this.listReprises[i])
      }
    }
    this.listReprises = tmpList
  }

  getSearchMonitor(item){
    this.listReprises = this.listReprisesInit
    let tmpList = []
    for (let i = 0; i < this.listReprises.length; i++) {
      if(this.listReprises[i].emailMonitor.indexOf(item.target.value) !== -1) {
        tmpList.push(this.listReprises[i])
      }
    }
    this.listReprises = tmpList
  }

  onSelect(reprise){
    this.selectedReprise=reprise
    this.showReprise = true;
  }

  onValid(valid:boolean){
    if(valid === true) this.showReprise = false;
  }

}
