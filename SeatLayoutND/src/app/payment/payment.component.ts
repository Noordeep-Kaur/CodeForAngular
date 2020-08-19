import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../services/paymentService';
import { PrintTicketService } from '../services/printticketService';
import {UserService} from '../services/userService';
import {BusService} from '../services/busService';
import { SeatLayoutService } from '../services/seatlayoutService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  car;
  ticket;
  constructor(private payServ:PaymentService,private printSer:PrintTicketService,
    private busSer:BusService,private userSer:UserService,private seatServ:SeatLayoutService) {
    this.userSer.getBusID(this.busSer.trip).subscribe((data)=>{
      //console.log(data);
      this.car=data;
      this.busSer.busId=this.car;
      //console.log(this.car,this.busSer.busId);
    })
   }

  ngOnInit() {
  }

  postToTicketTable()
  {
    console.log(this.seatServ.gid,this.seatServ.fare,this.seatServ.count)
    // this.printSer.displayTicket(this.ticket).subscribe((data)=>{
    //   console.log(data);})
    // this.payServ.postTicketValues().subscribe((data)=>{
    //   console.log(data);
  }
}
  
 

