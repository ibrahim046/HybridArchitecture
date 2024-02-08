import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forfait-sante-specialite-medicale',
  templateUrl: './forfait-sante-specialite-medicale.component.html',
  styleUrls: ['./forfait-sante-specialite-medicale.component.scss']
})
export class ForfaitSanteSpecialiteMedicaleComponent implements OnInit {

  packages = [
    {name: 'Pharmacie', selected: false},
    {name: 'Soins à domicile', selected: false},
    {name: 'Test Covid-19 PCR', selected: false},
    {name: 'Télémédecine', selected: false},
    {name: 'Consultation Spécialiste', selected: false},
    {name: 'Imagerie Médicale', selected: false},
    {name: 'Bilan de santé périodique', selected: false},
    {name: 'Consultation Généraliste', selected: false},
    {name: 'Analyses - Laboratoires', selected: false}
  ];

  specialities = [
    {name: 'Cardiologie', selected: false},
    {name: 'Chirurgie', selected: false},
    {name: 'Dermatologie', selected: false},
    {name: "L'endocrinologie", selected: false},
    {name: 'Gastro-entérologie', selected: false},
    {name: 'Gériatrie', selected: false},
    {name: 'Gynécologie', selected: false},
    {name: "L'hématologie", selected: false},
    {name: 'Hépatologie', selected: false},
    {name: 'Infectiologie', selected: false},
    {name: 'Néonatologie', selected: false}
  ];

  toggleSelections(i: number) {
    this.specialities[i].selected = !this.specialities[i].selected;
  }

  toggleSelection(i: number) {
    this.packages[i].selected = !this.packages[i].selected;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
