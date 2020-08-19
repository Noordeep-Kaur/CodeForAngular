import { Component, OnInit } from '@angular/core';
import { CancelService } from '../services/cancelService';

@Component({
  selector: 'app-cancelled-bookings',
  templateUrl: './cancelled-bookings.component.html',
  styleUrls: ['./cancelled-bookings.component.css']
})
export class CancelledBookingsComponent implements OnInit {
  model:any={}
  cancel;
  constructor(private cancelService:CancelService) { }

  ngOnInit(): void {
  }
  fetchBookings(){
    this.cancelService.cancelTicket(this.model).subscribe((data)=>{
      this.cancel=data;
      console.log(typeof(this.cancel));
    })
  }
}
