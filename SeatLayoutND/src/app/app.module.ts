import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
//import { RouterModule, Routes, Router} from '@angular/router';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import {BusService} from './services/busService';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/loginService';
import { PrintTicketService} from './services/printticketService';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { SeatlayoutComponent } from './seatlayout/seatlayout.component';
import { GuestuserdetailComponent } from './guestuserdetail/guestuserdetail.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TicketgenerationComponent } from './ticketgeneration/ticketgeneration.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SeatLayoutService } from './services/seatlayoutService';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CurrentBookingsComponent } from './current-bookings/current-bookings.component';
import { PreviousBookingsComponent } from './previous-bookings/previous-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { PaymentService } from './services/paymentService';
import { UserService } from './services/userService';
import { CancelledBookingsComponent } from './cancelled-bookings/cancelled-bookings.component';
import { WalletService } from './services/walletService';
import { PreviousService } from './services/previousBooking';
import { CancelService } from './services/cancelService';
import { PrintticketComponent } from './printticket/printticket.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ChangePasswordComponent,
    CurrentBookingsComponent,
    PreviousBookingsComponent,
   // ProfileComponent,
    WalletComponent,
    ForgotpasswordComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    TicketgenerationComponent,
    BookingsComponent,
    DashBoardComponent,
    CancelledBookingsComponent,
    PrintticketComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [BusService,LoginService,PrintTicketService,SeatLayoutService,UserService,WalletService,PreviousService,CancelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
