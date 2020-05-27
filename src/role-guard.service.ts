import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    let token = localStorage.getItem('token');
    try{
      let isAdmin = JSON.parse(token).isAdmin;
      if(!isAdmin || !this.auth.isAuthenticated()){
        return false;
      }
      else{
        return true;
      }
    }
    catch(e){
      return false;
    }
  }
}
