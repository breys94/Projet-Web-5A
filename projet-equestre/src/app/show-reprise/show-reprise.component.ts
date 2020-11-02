import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { repriseResponse } from '../response_api/repriseResponse';
import { Router, ActivatedRoute } from  '@angular/router';
import { UserService } from '../user.service';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-show-reprise',
  templateUrl: './show-reprise.component.html',
  styleUrls: ['./show-reprise.component.css']
})
export class ShowRepriseComponent implements OnInit {

  @Input() reprise: repriseResponse;
  @Output() valid = new EventEmitter<boolean>();

  
  pipe = new DatePipe('fr');
  beginDate;
  endDate;

  constructor() { }

  ngOnInit(): void {
    this.beginDate = this.pipe.transform(this.reprise.beginDate, 'longDate');
    this.endDate = this.pipe.transform(this.reprise.endDate, 'longDate');
  }

  inscription(){
    console.log("inscription")
  }

  goBack(){
    this.valid.emit(true);
  }

}
