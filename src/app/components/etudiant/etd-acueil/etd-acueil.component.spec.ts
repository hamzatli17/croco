import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdAcueilComponent } from './etd-acueil.component';

describe('EtdAcueilComponent', () => {
  let component: EtdAcueilComponent;
  let fixture: ComponentFixture<EtdAcueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtdAcueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdAcueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
