import {Bus} from "../models/bus";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable()
export class BusService{
    private Root_url="http://localhost:53534/";
    buses:Bus[];
    trip:number;
    fromLocation:string;
    toLocation:string;
    fromTime:string;
    toTime:string;
    fromDate:string;
    busId:number;
    
    constructor(private http:HttpClient){
        //var droplist=this.http.get("http://localhost:53534/api/JourneyRoutes");
        this.buses=[];
    }
    searchTable(model:any){
        return this.http.post<any>("http://localhost:53534/api/JourneyRoutes",model)
    }
    public getBuses(){
        return this.http.get("http://localhost:53534/api/fetchbuses");
    }
    tolocationfrom(TripID){
        return this.http.get("http://localhost:53534/api/JourneyRoutes/"+TripID).toPromise().then(result=>this.buses=result as Bus[])
    }
}