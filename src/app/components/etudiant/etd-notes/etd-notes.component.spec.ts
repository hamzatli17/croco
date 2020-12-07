import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdNotesComponent } from './etd-notes.component';

describe('EtdNotesComponent', () => {
  let component: EtdNotesComponent;
  let fixture: ComponentFixture<EtdNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtdNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
