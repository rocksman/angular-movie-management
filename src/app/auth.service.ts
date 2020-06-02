import { Injectable } from '@angular/core';
import { RoleGuardService } from './role-guard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  adminRole = false;
  constructor() {}

  public isAdmin(): boolean {
    let token = localStorage.getItem('token');
    try {
      let isAdmin = JSON.parse(token).isAdmin;
      if (!isAdmin || !this.isAuthenticated()) {
        this.adminRole = false;
        return false;
      } else {
        this.adminRole = true;
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    try {
      if (Object.keys(JSON.parse(token)).length > 0) {
        this.isAuth = true;
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  public changeAuth(flag): void {
    if (!flag) {
      localStorage.removeItem('token');
    }
    this.isAuth = flag;
  }
}
