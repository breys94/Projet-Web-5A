import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.component.html',
  styleUrls: ['./homepage-admin.component.css']
})
export class HomepageAdminComponent implements OnInit {

  showCreate = false;
  showSearch = false;
  showUnlock = false;
  showCreateHorse = false;
  showProfile = false;

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  loadCreatePage(){
    this.showCreate = true;
    this.showSearch = false;
    this.showProfile = false;
    this.showUnlock= false;
    this.showCreateHorse = false;
  }

  loadSearchPage(){
    this.showCreate = false;
    this.showSearch = true;
    this.showUnlock= false;
    this.showProfile = false;
    this.showCreateHorse = false;
  }

  loadUnlockPage(){
    this.showCreate = false;
    this.showSearch = false;
    this.showUnlock= true;    
    this.showProfile = false;
    this.showCreateHorse = false;
  }

  loadcreateHorsePage(){
    this.showCreate = false;
    this.showSearch = false;
    this.showUnlock= false;
    this.showProfile = false;
    this.showCreateHorse = true;
  }

  loadProfile(){
    this.showCreate = false;
    this.showSearch = false;
    this.showUnlock= false;
    this.showCreateHorse = false;
    this.showProfile = true;
  }  

}
