import { Component, OnInit } from '@angular/core';
import {WalletService} from  '../services/walletService'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  model:any={};
  emps;
  constructor(private walletService:WalletService) { }

  ngOnInit(): void {
  }
  fetchOneWallet(){
    this.walletService.getProfieDetails(this.model.UID).subscribe((data)=>{
        this.emps=data;
        console.log(this.emps);
    })
    
  }
  editProfile(){
    this.walletService.editUser(this.model.UID,this.model).subscribe(
      success=>alert("Done"),
      error=>alert(error));   
  }
}