import { PrintTicket } from '../models/printticket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { UserService} from '../services/userService';
import{ BusService} from '../services/busService'; 
import { SeatLayoutService } from './seatlayoutService';


@Injectable({
    providedIn: 'root'
  })
export class PrintTicketService{

    //ticket: PrintTicket[];
    constructor(private http:HttpClient,private userSer:UserService,private busSer:BusService,private seatSer:SeatLayoutService){

        //this.ticket=[];
    }
    public displayTicket(ticket: PrintTicket){
        
        ticket.BusID=this.busSer.busId;
        //console.log(ticket.BusID);
        ticket.BookingUserID=this.seatSer.gid;
        //console.log(ticket.BookingUserID);
        ticket.FromDate=this.busSer.fromDate;
        ticket.FromLocation=this.busSer.fromLocation;
        ticket.FromTime=this.busSer.fromTime;
        ticket.ToDate=this.busSer.fromDate;
        ticket.NumberOfSeats=this.seatSer.count;
        ticket.ToLocation=this.busSer.toLocation;
        ticket.Fare=this.seatSer.fare;
        //console.log(ticket);
        return this.http.post<any>("http://localhost:53534/api/TicketGeneration",ticket);
    }
    public fetchingticket(id){
        return this.http.get("http://localhost:53534/api/TicketGeneration/"+id);
    }
}