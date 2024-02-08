import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heures-ouvertures',
  templateUrl: './heures-ouvertures.component.html',
  styleUrls: ['./heures-ouvertures.component.scss']
})
export class HeuresOuverturesComponent implements OnInit {
  title = 'Heures de travail';
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  hours = Array(7).fill(''); // Les champs sont vides par défaut
  selectedOption = '';

  selectOption(option: string) {
    this.selectedOption = option;
    if (option === '24/7') {
      this.hours = Array(7).fill('24h - 24h');
    } else if (option === '8h/17h') {
      this.hours = ['8h - 17h', '8h - 17h', '8h - 17h', '8h - 17h', '8h - 17h', 'Fermé', 'Fermé'];
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
