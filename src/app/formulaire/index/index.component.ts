import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  isEditable = false;
  detailsForm!: FormGroup;
  personalInfoForm!: FormGroup;
  verif!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  onSubmit() {
    if (this.detailsForm.valid) {
      // Soumettez votre formulaire ici
      console.log(this.detailsForm.value);
    } else {
      // Si le formulaire n'est pas valide, vous pouvez afficher un message d'erreur
      alert('Veuillez remplir tous les champs requis');
    }
  }


  ngOnInit(): void {
    this.detailsForm = this._formBuilder.group({
      nomEtablissement: ['', Validators.required],
      typeEtablissement: ['', Validators.required],
      monnaieUtilisee: ['', Validators.required],
      descriptionEtablissement: ['']
    });
    this.personalInfoForm = this._formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      contactEtablissement: ['', Validators.required],
      website: ['', [Validators.required, Validators.pattern('^(https?://)?([\\da-zA-Z.-]+)\\.([a-zA-Z.]{2,6})([/\\w .-]*)*/?$')]],
      facebookAccount: ['', [Validators.required, Validators.pattern('^(https?://)?(www\\.)?facebook.com/.+$')]],
    });
    this.verif = this._formBuilder.group({
      reconnaissances: ['', Validators.requiredTrue],
      verifications: ['', Validators.requiredTrue],
      conseils: ['']
    });

    

  }

  areAllCheckboxesChecked(): boolean {
    return this.verif.get('reconnaissances')?.value &&
           this.verif.get('verifications')?.value &&
           this.verif.get('conseils')?.value;
  }


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


  get nomEtablissement() {
    return this.detailsForm.get('nomEtablissement');
  }
  get typeEtablissement() {
    return this.detailsForm.get('typeEtablissement');
  }
  get monnaieUtilisee() {
    return this.detailsForm.get('monnaieUtilisee');
  }
  get descriptionEtablissement() {
    return this.detailsForm.get('descriptionEtablissement');
  }

  get country() {
    return this.personalInfoForm.get('country');
  }

  get city() {
    return this.personalInfoForm.get('city');
  }

  get contactEtablissement() {
    return this.personalInfoForm.get('contactEtablissement');
  }

  get website() {
    return this.personalInfoForm.get('website');
  }

  get facebookAccount() {
    return this.personalInfoForm.get('facebookAccount');
  }




}
