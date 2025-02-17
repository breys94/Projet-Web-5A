import { Component, Input, OnInit, Inject, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { repriseResponse } from '../response_api/repriseResponse';
import { Router, ActivatedRoute, NavigationEnd } from  '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-reprise-assign',
  templateUrl: './show-reprise-assign.component.html',
  styleUrls: ['./show-reprise-assign.component.css']
})
export class ShowRepriseAssignComponent implements OnInit {

  @Input() reprise: repriseResponse;
  @Output() valid = new EventEmitter<boolean>();

  showCancel;
  showAddHorses;
  lauchAddHorse;
  showValidation;
  simpleValue : string;

  mySubscription;

  constructor(private userService: UserService, private router: Router) { 
    
  }

  listHorses;
  listHorseRiders;
  listSelectedHorses;

  selectedUser;
  selectedHorse

  ngOnInit(): void {

    this.showAddHorses = false;
    this.showCancel = false;
    this.listHorses = [];
    this.listHorseRiders = [];
    this.listSelectedHorses = [];

    this.userService.getHorses().subscribe(
      data => {
        this.listHorses = data
        let tmpList = []
        for (let i = 0; i < this.listHorses.length; i++) {
          if(this.listHorses[i].emailOwner === null) tmpList.push(this.listHorses[i])
        }
        this.listHorses = tmpList
        if(this.listHorses.length >= 1 && this.reprise.nbHorseRider < 3){
          this.showAddHorses = false;
          this.showCancel = true;
        }
        if(this.listHorses.length === 0){
          this.showAddHorses = true;
          this.showCancel = false;
        }
      }
    );

    this.userService.getHorseRiderByReprise(this.reprise.id).subscribe(
      data => {
        this.listHorseRiders = data
      }
    )
  }

  launchAddHorse(){
    this.lauchAddHorse = true;
    this.showAddHorses = false;
  }

  onSelect(horse){
    if(this.selectedUser === undefined)return
    this.showValidation = true
    this.selectedHorse = horse
  }

  cancelReprise(){
    this.userService.deleteReprise(this.reprise.id).subscribe()
    alert("Cours supprimé")
  }

  onValid(valid:boolean){
    if(valid === true) this.showValidation = false;
    this.ngOnInit()
  }

}
