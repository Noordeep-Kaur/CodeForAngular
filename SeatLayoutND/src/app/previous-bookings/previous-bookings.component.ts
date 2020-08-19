import { Component, OnInit } from '@angular/core';
import {PreviousService} from '../services/previousBooking';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-previous-bookings',
  templateUrl: './previous-bookings.component.html',
  styleUrls: ['./previous-bookings.component.css']
})
export class PreviousBookingsComponent implements OnInit {
  model:any={};
  previous;
  constructor(private previousService:PreviousService) { }

  ngOnInit(): void {
  }
  fetchBookings(){
    this.previousService.currentTicket(this.model.BookingUserID).subscribe((data)=>{
      this.previous=data;
    })
  }
}