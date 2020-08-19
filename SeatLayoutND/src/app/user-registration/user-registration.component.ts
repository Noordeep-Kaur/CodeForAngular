import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/loginService';
import {User} from'../models/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user:User;
  users:User[];
  constructor(private loginService:LoginService) {
    this.user=new User();
    this.users=[];
   }
   addUser(){
    console.log("abcd");
    this.loginService.addUser(this.user).subscribe((data)=>{
      console.log(data);
    })
    this.user=new User();
  }
  reset(){
    this.user=new User();
  }

  ngOnInit(): void {
  }

}
