import { Injectable } from '@angular/core';
import { Users } from './users';
import user from './files/users.json';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  users: Users[];
  constructor() {
    this.users = [...user];
  }

  getUsers = (): Users[] => {
    return this.users;
  };
  authenticateUser = (user): boolean => {
    let validate = this.users.filter(
      (e) => e.email == user.email && e.password == user.password
    );
    if (validate.length > 0)
      localStorage.setItem('token', JSON.stringify(validate[0]));
    return validate.length > 0;
  };
  registerUser = (user): void => {
    let newUser = new Users(
      user.id,
      user.name,
      user.email,
      user.password,
      user.phone,
      false
    );
    this.users.push(newUser);
  };
}
