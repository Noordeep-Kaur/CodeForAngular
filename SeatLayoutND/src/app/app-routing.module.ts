import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ShowbusesComponent} from './showbuses/showbuses.component';
import {SeatlayoutComponent} from './seatlayout/seatlayout.component';
import {GuestuserdetailComponent} from './guestuserdetail/guestuserdetail.component';
import {PaymentComponent} from './payment/payment.component';
import { UserLoginComponent} from './user-login/user-login.component';
import { UserRegistrationComponent} from './user-registration/user-registration.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BookingsComponent} from './bookings/bookings.component';
import { CurrentBookingsComponent} from './current-bookings/current-bookings.component';
import { PreviousBookingsComponent} from './previous-bookings/previous-bookings.component';
import { CancelledBookingsComponent } from './cancelled-bookings/cancelled-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {PrintticketComponent} from './printticket/printticket.component';
//import {ShowbusesComponent} from './showbuses/showbuses.component';
var myRoutes:Routes=[
    {path:'showbuses',component:ShowbusesComponent},
    {path:'seatlayout',component:SeatlayoutComponent},
    {path:'guestuserdetail',component:GuestuserdetailComponent},
    {path:'payment',component:PaymentComponent},
    {path:'userlogin',component:UserLoginComponent},
    {path:'userregistration',component:UserRegistrationComponent},
    {path:'dashboard',component:DashBoardComponent,children:[
      
    ]},
    {path:"bookings",component:BookingsComponent,children:[
       {path:"cancelled-bookings",component:CancelledBookingsComponent},
       {path:"current-bookings",component:CurrentBookingsComponent},
       {path:"previous-bookings",component:PreviousBookingsComponent}
    ]},
    
    {path:'profile',component:ProfileComponent},
    {path:'change-password',component:ChangePasswordComponent},
    {path:'wallet',component:WalletComponent},
    {path:'printticket',component:PrintticketComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SeatlayoutComponent,ShowbusesComponent,GuestuserdetailComponent,
  PaymentComponent,UserLoginComponent,UserRegistrationComponent,DashBoardComponent,BookingsComponent,
  ProfileComponent,WalletComponent,ChangePasswordComponent]
