import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etd-notes',
  templateUrl: './etd-notes.component.html',
  styleUrls: ['./etd-notes.component.css']
})
export class EtdNotesComponent implements OnInit {
  result = [];
  selectedModule:string;
  userName:string = "dr_benounnas@esi.dz";
  modules = [
              {"name":"MAGIL"},
              {"name":"TICO"}
            ];
  constructor() { }

  ngOnInit(): void {
  }
  selectModule(newValue){}
}
