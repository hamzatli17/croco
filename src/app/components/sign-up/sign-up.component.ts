import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  userForm:FormGroup;
  constructor(
    
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    
  }

  signup(user){
    console.log('This is my user', user);
    this.userService.signUp(user).subscribe(
      (data) => {
        console.log('Here returned Data', data);   
      }
      
    );
    this.router.navigate(['/']);

  }

    
  }


