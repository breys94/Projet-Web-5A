import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-monitor',
  templateUrl: './homepage-monitor.component.html',
  styleUrls: ['./homepage-monitor.component.css']
})
export class HomepageMonitorComponent implements OnInit {

  showCreate;
  showList;
  showProfile;

  constructor() { }

  ngOnInit(): void {
    this.showCreate = false;
    this.showList = false;
    this.showProfile = false;
  }

  loadAssignPage(){
    this.showCreate = false;
    this.showList = true;
    this.showProfile = false;
  }

  loadCreatePage(){
    this.showCreate = true;
    this.showList = false;
    this.showProfile = false;
  }

  loadProfile(){
    this.showCreate = false;
    this.showList = false;
    this.showProfile = true;
  }  

}
