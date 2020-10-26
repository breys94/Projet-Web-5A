import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-monitor',
  templateUrl: './homepage-monitor.component.html',
  styleUrls: ['./homepage-monitor.component.css']
})
export class HomepageMonitorComponent implements OnInit {

  showCreate;
  showAssign;
  showProfile;

  constructor() { }

  ngOnInit(): void {
  }

  loadAssignPage(){
    this.showCreate = false;
    this.showAssign = true;
    this.showProfile = false;
  }

  loadCreatePage(){
    this.showCreate = true;
    this.showAssign = false;
    this.showProfile = false;
  }

  loadProfile(){
    this.showCreate = false;
    this.showAssign = false;
    this.showProfile = true;
  }  

}
