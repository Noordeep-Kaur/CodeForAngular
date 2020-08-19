import { Component, OnInit } from '@angular/core';
import {PrintTicket} from '../models/printticket';
import {PrintTicketService} from '../services/printticketService';
@Component({
  selector: 'app-printticket',
  templateUrl: './printticket.component.html',
  styleUrls: ['./printticket.component.css']
})
export class PrintticketComponent implements OnInit {

  ticket: any = {};
  tickets;
  result;
  constructor(private printTicketService: PrintTicketService,) {
    this.printTicketService.displayTicket(this.ticket).subscribe((data)=>{
      console.log(data);
    })
    //this.ticket = new PrintTicket();
    // this.tickets=[];
  }

  ticketDisplay(){
     this.printTicketService.fetchingticket(this.ticket.BookingUserID).subscribe((data) => {
      this.result = data;
      console.log(this.result);
    //   //console.log(this.ticket);
    // console.log(this.ticket);
    })
  }

  ngOnInit(): void {
  }

}
