import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDedieComponent } from './personnel-dedie.component';

describe('PersonnelDedieComponent', () => {
  let component: PersonnelDedieComponent;
  let fixture: ComponentFixture<PersonnelDedieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelDedieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelDedieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
