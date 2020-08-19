import { Component, OnInit } from '@angular/core';
import {CancelService} from '../services/cancelService';
@Component({
  selector: 'app-current-bookings',
  templateUrl: './current-bookings.component.html',
  styleUrls: ['./current-bookings.component.css']
})
export class CurrentBookingsComponent implements OnInit {
model:any={'BookingUserID':'','TicketBookingStatus':'0'};
current;
  constructor(private cancelService:CancelService) { }

  ngOnInit(): void {
  }
  fetchticket(){
    this.cancelService.currentTicket(this.model.BookingUserID).subscribe((data)=>{
      this.current=data;
    })
   
  }
  cancelTicket(model){
    console.log(this.model.TicketBookingStatus)
      this.cancelService.cancel(this.model.BookingUserID,model).
        subscribe(
          success=>alert("Done"),
          error=>alert(error));    
  }
}