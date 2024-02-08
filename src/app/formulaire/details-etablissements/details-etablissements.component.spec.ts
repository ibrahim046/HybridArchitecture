import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEtablissementsComponent } from './details-etablissements.component';

describe('DetailsEtablissementsComponent', () => {
  let component: DetailsEtablissementsComponent;
  let fixture: ComponentFixture<DetailsEtablissementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEtablissementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
