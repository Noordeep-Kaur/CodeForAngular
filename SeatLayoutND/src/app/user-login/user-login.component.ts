import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/loginService';
import {User} from'../models/user';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username;
  password;
  logins;
  result;
  user:User;

  constructor(private loginService:LoginService) {
    this.logins=[];
    this.user=new User();
      //this.login=new User();
  }
  login(){
     
    console.log(this.user.Password);
    this.loginService.getUserLogin(this.user).subscribe((data)=>{
      //console.log(data);
      console.log("success");
      this.result="Logged In";
      this.user=new User();
    
    })
    this.result="Incorrect Username or password";
    this.user.Password=null;
    
  }


  ngOnInit(): void {
  }

}
