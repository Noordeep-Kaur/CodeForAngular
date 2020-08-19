import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/walletService';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  model:any={};
  pass;
  myForm:FormGroup;
  constructor(private walletService:WalletService,private routes:Router) {
    this.myForm=new FormGroup({
      Address:new FormControl(null,[Validators.required]),
      EmailId:new FormControl(null,[Validators.required])
    });
   }

  ngOnInit(): void {
  }
  //  changePassword(){
  // //   this.walletService.passwordChange(this.model.UID,this.model).subscribe(
  // //     success=>alert("Done"),
  // //     error=>alert(error));
    
  //  }

   editProfile(){
    this.walletService.editUser(this.model.UID,this.model).subscribe(
      success=>alert("Done"),
      error=>alert(error));   
  }
}