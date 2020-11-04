import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-horserider',
  templateUrl: './homepage-horserider.component.html',
  styleUrls: ['./homepage-horserider.component.css']
})
export class HomepageHorseriderComponent implements OnInit {

  showSearch = false;
  showProfile = false;
  showParticipe = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadSearchPage(){
    this.showSearch = true;
    this.showProfile = false;
    this.showParticipe = false;
  }

  loadParticipePage(){
    this.showSearch = false;
    this.showProfile = false;
    this.showParticipe = true;
  }

  loadProfile(){
    this.showSearch = false;
    this.showProfile = true;
    this.showParticipe = false;
  } 

}
