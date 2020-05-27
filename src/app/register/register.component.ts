import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(public users : UserDataService) {}
  user = new Users(Math.random(), '', '', '', '', false);

  register = () => {
    this.users.registerUser(this.user);
    alert('Registered');
  }
  ngOnInit(): void {}
}
