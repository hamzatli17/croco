import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotePService } from 'src/app/services/note-p.service';

@Component({
  selector: 'app-etd-notes-perso',
  templateUrl: './etd-notes-perso.component.html',
  styleUrls: ['./etd-notes-perso.component.css']
})
export class EtdNotesPersoComponent implements OnInit {
  notePForm:FormGroup;
 
  notesPers:any;
  constructor(
    private notePService:NotePService,
    private router:Router) { }

  ngOnInit(): void {
  }
  save(noteP) { 
   
     this.notePService.create(noteP).subscribe(
      (data)=>{ 
      console.log('success');
     }
     );
     this.router.navigate(['etd-acceuil/notes-perso']);
    
  }

}
