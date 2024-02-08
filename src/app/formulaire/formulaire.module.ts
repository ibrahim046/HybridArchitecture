import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LogoTitreComponent } from './logo-titre/logo-titre.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadImageComponent } from './upload-image/upload-image.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DetailsEtablissementsComponent } from './details-etablissements/details-etablissements.component';
import { InformationsPersonnellesComponent } from './informations-personnelles/informations-personnelles.component';
import { HeuresOuverturesComponent } from './heures-ouvertures/heures-ouvertures.component';
import { ForfaitSanteSpecialiteMedicaleComponent } from './forfait-sante-specialite-medicale/forfait-sante-specialite-medicale.component';
import { MatTableModule } from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { PersonnelDedieComponent } from './personnel-dedie/personnel-dedie.component';
import { ValidationComponent } from './validation/validation.component';



@NgModule({
  declarations: [
    IndexComponent,
    LogoTitreComponent,
    UploadImageComponent,
    DetailsEtablissementsComponent,
    InformationsPersonnellesComponent,
    HeuresOuverturesComponent,
    ForfaitSanteSpecialiteMedicaleComponent,
    PersonnelDedieComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTableModule,
    MatChipsModule,
  ],
  exports: [IndexComponent]
})
export class FormulaireModule { }
