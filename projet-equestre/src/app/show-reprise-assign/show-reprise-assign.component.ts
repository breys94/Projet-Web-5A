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
  @Input() typeReprise: string;
  @Output() valid = new EventEmitter<boolean>();

  showCancel;
  showAddHorses;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.typeReprise)
    if(this.typeReprise === "repriseNeedsHorses"){
      this.showAddHorses = true;
      this.showCancel = false;
    }
    if(this.typeReprise === "repriseCancel"){
      this.showAddHorses = false;
      this.showCancel = true;
    }
  }

}
