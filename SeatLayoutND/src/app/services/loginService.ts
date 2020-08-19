import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Login} from '../models/login';
import { Observable, observable } from 'rxjs';
import {User} from '../models/user';

@Injectable()
export class LoginService{

    user;
    users:User[];
    //admins:Admin[];

        constructor(private http:HttpClient){
            this.users=[];

        }
        public getUserLogin(user){
            console.log(user);
             return this.http.post("http://localhost:53534/api/UserDetails",user);
        }
         public getUser(){
            return this.http.get("http://localhost:62545/api/UserDetails");
         }
         public addUser(user){
            return this.http.post("http://localhost:62545/api/UserRegister",user);

        }
        public putUser(id:number,user:User){
            return this.http.put("http://localhost:62545/api/ForgotPassword"+id,user);
        }
        // public getAdminLogin(admin){
        //     console.log(admin);
        //     return this.http.post("http://localhost:57445/api/Admins",admin);
        // }
}