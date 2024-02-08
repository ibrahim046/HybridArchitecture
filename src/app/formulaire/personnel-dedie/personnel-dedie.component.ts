import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personnel-dedie',
  templateUrl: './personnel-dedie.component.html',
  styleUrls: ['./personnel-dedie.component.scss']
})
export class PersonnelDedieComponent implements OnInit {

  formulaire = this.fb.group({
    contacts: this.fb.array([this.createContact()])
  });

  constructor(private fb: FormBuilder) {}

  get contacts() {
    return this.formulaire.get('contacts') as FormArray;
  }

  createContact(): FormGroup{
    return this.fb.group({
      contact: ''
    });
  }

  ajouterContactSiNecessaire(index: number): void {
    if (index === this.contacts.length - 1) {
      this.contacts.push(this.createContact());
    }
  }

  ngOnInit(): void {
  }

}
