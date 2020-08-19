import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/walletService';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  model:any={};
  emp;
  constructor(private walletService:WalletService) { }

  ngOnInit(): void {
  }
  fetchOneWallet(){
    this.walletService.getWallet(this.model).subscribe((data)=>{
      this.emp=data;
      console.log(this.emp);
    })
  }

}
