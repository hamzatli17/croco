import { EvaluationsService } from './../../../services/evaluations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etd-releve-notes',
  templateUrl: './etd-releve-notes.component.html',
  styleUrls: ['./etd-releve-notes.component.css']
})
export class EtdReleveNotesComponent implements OnInit {
evaluations:any;
  constructor(private evaluationsService:EvaluationsService) { }

  ngOnInit(): void {
    this.evaluationsService.getAllEval().subscribe(
      data => {     
        console.log('This is my data', data);
        this.evaluations= data.evaluations
      } 
    )}
}