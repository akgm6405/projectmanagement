import { Component } from '@angular/core';

//import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor() {
        // this.accountService.user.subscribe(x => this.user = x);
    }

    // logout() {
    //     this.accountService.logout();
    // }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }


}