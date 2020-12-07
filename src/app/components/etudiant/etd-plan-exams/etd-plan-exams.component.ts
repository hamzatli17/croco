import { ExamsService } from './../../../services/exams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etd-plan-exams',
  templateUrl: './etd-plan-exams.component.html',
  styleUrls: ['./etd-plan-exams.component.css']
})
export class EtdPlanExamsComponent implements OnInit {

  exams:any;
  constructor(private examsService:ExamsService) { }

  ngOnInit(): void {
    this.examsService.getAllExams().subscribe(
      data => {     
        console.log('This is my data', data);
        this.exams= data.exams
      } 
    )}
}
