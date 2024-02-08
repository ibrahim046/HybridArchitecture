import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitSanteSpecialiteMedicaleComponent } from './forfait-sante-specialite-medicale.component';

describe('ForfaitSanteSpecialiteMedicaleComponent', () => {
  let component: ForfaitSanteSpecialiteMedicaleComponent;
  let fixture: ComponentFixture<ForfaitSanteSpecialiteMedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitSanteSpecialiteMedicaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitSanteSpecialiteMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
