import { Component, OnInit } from '@angular/core';
import{ GuestUser } from '../models/GuestUser';
import { UserService } from '../services/UserService';
import { BusService } from '../services/busService';
import { SeatLayoutService } from '../services/seatlayoutService';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-guestuserdetail',
  templateUrl: './guestuserdetail.component.html',
  styleUrls: ['./guestuserdetail.component.css']
})
export class GuestuserdetailComponent implements OnInit {
  model:any={};
  a;
  guestUser:GuestUser;
  guestUsers:GuestUser[];
  constructor(private guestUserService:UserService,private busSer:BusService,
    private seatlay:SeatLayoutService,private router:RouterModule) { 
    // console.log(this.busSer.trip)
    // this.guestUserService.getTrip(this.busSer.trip).subscribe((data)=>{
    //   console.log(data);
    // })
    this.guestUser=new GuestUser();
    this.guestUsers=[];
    console.log(this.busSer.fromLocation,this.seatlay.count)

  }
  addGuestUser(){
    console.log("hi");
    this.guestUserService.addGuestUser(this.model).subscribe((data)=>{
      console.log(data);
this.a=data;

this.guestUserService.fetchemail(this.model).subscribe((res)=>{
  console.log(res);
  this.seatlay.gid=res;
  console.log(this.seatlay.gid);
})
//if(this.a!="false")
//this.router.navigate(['/payment'])
    })
    //fetchemail()
    
  }
  // fetchemail()
  // {
  //   this.guestUserService.fetchemail(this.model.EmailID).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }
  //  third()
  //  {
  //   addGuestUser();
  //   fetchemail();
  //  }
  

  reset(){
    this.guestUser=new GuestUser();
  }

  ngOnInit(): void {
    // console.log(this.busSer.trip)
    // this.guestUserService.getTrip(this.busSer.trip).subscribe((data)=>{
    //   console.log(data);
    // })
  }

}

