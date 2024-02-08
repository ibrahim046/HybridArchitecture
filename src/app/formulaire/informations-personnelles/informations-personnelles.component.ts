import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informations-personnelles',
  templateUrl: './informations-personnelles.component.html',
  styleUrls: ['./informations-personnelles.component.scss']
})
export class InformationsPersonnellesComponent implements OnInit {

  informationsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.informationsForm = this.fb.group({
      pays: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      contactEtablissement: ['', [Validators.required]],
      siteWeb: [''],
      compteFacebook: ['']
    });
  }

  onSubmit() {
    if (this.informationsForm.valid) {
      console.log(this.informationsForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

}
