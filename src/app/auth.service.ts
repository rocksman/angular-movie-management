import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  constructor() { }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    try{
      if(Object.keys(JSON.parse(token)).length>0){
        this.isAuth = true;
        return true;
      }
      else{
        return false;
      }
    }
    catch(e){
      return false;
    }
  }
  public changeAuth(flag): void{
    if(!flag){
      localStorage.removeItem('token');
    }
    this.isAuth = flag;
  }
}
