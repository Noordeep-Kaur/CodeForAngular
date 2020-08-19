import{HttpClient} from '@angular/common/http';
import {Injectable, ComponentFactoryResolver} from '@angular/core';
import{ GuestUser } from '../models/GuestUser';
import { Observable, observable } from 'rxjs';
import { BusService } from './busService';

@Injectable({
    providedIn: 'root'
  })
export class UserService{
   // guestUser;
    guestUsers:GuestUser[];
    gid;
    seatCount;
    fare;
    constructor(private http:HttpClient ){
        this.guestUsers=[];
    }
    public addGuestUser(guestUser:GuestUser){
        return this.http.post("http://localhost:53534/api/GuestUser",guestUser)
    }
    public getGuestUser(){
        return this.http.get("http://localhost:53534/api/GuestUser")
    }
   
    public fetchemail(model){
       // console.log(model);
        return this.http.post("http://localhost:53534/api/FetchGID",model);
    }
    public getTrip(id){
        return this.http.get("http://localhost:53534/api/FetchGID/"+id);
    }

    public getBusID(id)
    {
        
        return this.http.get("http://localhost:53534/api/GetBusId/"+id.toString());
    }
}