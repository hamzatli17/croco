import { Component, OnInit } from '@angular/core';
import { EtdProfileService } from 'src/app/services/etd-profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etd-profile',
  templateUrl: './etd-profile.component.html',
  styleUrls: ['./etd-profile.component.css']
})
export class EtdProfileComponent implements OnInit {

  etudiant : any;
id:string;
 constructor(private etdProfileService:EtdProfileService,
  private activatedRoute: ActivatedRoute,
    private router:Router) { }


    ngOnInit(){
      //this.id = this.activatedRoute.snapshot.paramMap.get('id');
      let email = JSON.parse(localStorage.getItem("email"));
        this.etdProfileService.getEtudiant(email)
         .subscribe(
             data => this.etudiant = data[0]); 

    }
    update(){
      this.etdProfileService.updateEtd(this.etudiant).subscribe(
        () => {
          this.router.navigate(['profile']);
        }
      )
    }

}
