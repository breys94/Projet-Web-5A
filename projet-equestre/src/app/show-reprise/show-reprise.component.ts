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
  email;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.beginDate = this.pipe.transform(this.reprise.beginDate, 'longDate');
    this.endDate = this.pipe.transform(this.reprise.endDate, 'longDate');
    this.email = this.route.snapshot.params['email']
  }

  inscription(){
    this.userService.inscriptionReprise(this.reprise.id, this.email).subscribe(
      () => {
        alert("Inscription avec succès")
        console.log(console.log("Succès"));
      }, 
    )
  }

  goBack(){
    this.valid.emit(true);
  }

}
