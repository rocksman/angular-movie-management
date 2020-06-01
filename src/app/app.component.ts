import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movies';
  constructor(public auth: AuthService) {
    auth.isAuthenticated();
    auth.isAdmin();
  }
  changeAuth = (flag) => {
    this.auth.changeAuth(flag);
  };
}
