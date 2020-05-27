import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  adminFlag: boolean = false;
  custFlag: boolean = false;

  user = {
    email: '',
    password: '',
  };
  constructor(
    public router: Router,
    public service: UserDataService,
    public auth: AuthService
  ) {}
  authenticateAdmin = () => {
    if (this.service.authenticateUser(this.user)) {
      this.router.navigate(['home']);
      this.auth.changeAuth(true);
    } else {
      alert('Incorrect email or password');
    }
  };

  authenticateCust = () => {};

  switchToAdmin = (adminFlag) => {
    this.adminFlag = adminFlag;
  };
  switchToCust = (custFlag) => {
    this.custFlag = custFlag;
  };

  ngOnInit(): void {}
}
