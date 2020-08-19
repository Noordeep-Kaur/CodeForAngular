import {Wallet} from "../models/wallet";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable()
export class CancelService{
    constructor(private http:HttpClient){

    }
    currentTicket(id){
        return this.http.get("http://localhost:53534/api/Cancel/"+id)
    }
    cancelTicket(model){
        return this.http.post("http://localhost:53534/api/Cancel/",model);
    }
    cancel(id:number,model){
        return this.http.put("http://localhost:53534/api/Cancel/"+id,model);
    }
    // private Root_url="http://localhost:53534/";
    // money:Wallet[];
    // constructor(private http:HttpClient){
    //     //var droplist=this.http.get("http://localhost:53534/api/JourneyRoutes");
    //     this.money=[];
    // }
    // getWallet(model:any){
    //     return this.http.post<any>("http://localhost:53534/api/DashBoard",model)
    // }
    // getProfieDetails(id){
    //     return this.http.get("http://localhost:53534/api/DashBoard/"+id)
    // }
    // //  passwordChange(id:number,model){
    // //     return this.http.put("http://localhost:53534/api/DashBoard/"+id,model);
    // // }
    // editUser(id:number,model){
    //     return this.http.put("http://localhost:53534/api/DashBoard/"+id,model);
    // }
    // public getWallet(id){
    //     return this.http.get("http://localhost:53534/api/DashBoard/"+id).toPromise().then(result=>this.money=result as Wallet[])
    // }
    // tolocationfrom(TripID){
    //     return this.http.get("http://localhost:53534/api/JourneyRoutes/"+TripID).toPromise().then(result=>this.buses=result as Bus[])
    // }
}