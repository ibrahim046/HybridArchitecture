import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-etablissements',
  templateUrl: './details-etablissements.component.html',
  styleUrls: ['./details-etablissements.component.scss'],
  // providers:[
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     multi:true,
  //     useExisting: DetailsEtablissementsComponent
  //   }
  // ]
})
export class DetailsEtablissementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }



}
