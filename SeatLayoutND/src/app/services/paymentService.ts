import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class PaymentService
  {
      constructor(private http:HttpClient,private paymentSer:PaymentService)
      {

      }

      public postTicketValues(user){
        return this.http.post("http://localhost:62545/api/UserRegister",user);

    }
    public postToTicketTable(ticket){
      return this.http.post("http://localhost:53534/api/TicketGeneration",ticket);
    }
  }