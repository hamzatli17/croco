import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student:any;

  @ViewChild('studentForm', {read: ElementRef}) studentForm:ElementRef; //Form Reference

  constructor(private http:HttpClient, private router: Router, private loginService:LoginService) {
    //this.student = new Student();
    //not connected
    /* if(!this.loginService.account){
      this.router.navigate(['/login']);
    } */
  }

  ngOnInit() {
    console.log(this.studentForm.nativeElement);
  }

  addStudent(){
    // let headers = new Headers();
    // headers.append('Accept', 'application/json');
    // this.http.post("/api/createStudent",this.student,headers)
    //   .map(res => res.text())
    //   .subscribe(res => {
    //     this.notifyMessage(res);
    //     if(res.indexOf("OK") !== -1){
    //       this.studentForm.nativeElement.reset(); //reset form after the creation
    //     }
    //     console.log(res);
    //   });
  }

  notifyMessage(message:string){
    /* if(message.indexOf("OK") !== -1){
      $.notify(message, {
        type: 'success',
        delay : 2000,
        newest_on_top: true,
        placement: {
          from: "top",
          align: "center"
        },
        animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
        }
      });
    }else{
      $.notify(message, {
        type: 'danger',
        delay : 2000,
        newest_on_top: true,
        placement: {
          from: "top",
          align: "center"
        },
        animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
        }
      });
    } */
  }
}