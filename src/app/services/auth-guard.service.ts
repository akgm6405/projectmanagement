import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }
  canActivate() {
    if (sessionStorage.getItem('hk')) {
        return true;
    }
    
    this.router.navigate(['']);
        return true;
}
}
