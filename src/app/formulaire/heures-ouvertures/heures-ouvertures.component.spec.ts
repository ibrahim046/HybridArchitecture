import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeuresOuverturesComponent } from './heures-ouvertures.component';

describe('HeuresOuverturesComponent', () => {
  let component: HeuresOuverturesComponent;
  let fixture: ComponentFixture<HeuresOuverturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeuresOuverturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeuresOuverturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
