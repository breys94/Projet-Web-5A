import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { repriseResponse } from '../response_api/repriseResponse';
import { Router, ActivatedRoute } from  '@angular/router';
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

  constructor(private userService: UserService) { }

  listHorses;
  listHorseRiders;

  ngOnInit(): void {

    this.userService.getHorses().subscribe(
      data => {
        this.listHorses = data
        let tmpList = []
        for (let i = 0; i < this.listHorses.length; i++) {
          if(this.listHorses[i].idCavalier === undefined) tmpList.push(this.listHorses[i])
          this.listHorses = tmpList
        }
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
    console.log(horse)
  }

  cancelReprise(){
    console.log("cancel reprise")
  }

}
