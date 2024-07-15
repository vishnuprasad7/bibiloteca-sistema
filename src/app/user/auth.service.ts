import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser?: User | undefined;
  redirectUrl = '';

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() {}

  login(userName: string, password: string): void {
    if (!userName || !password) {
      //   this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName,
        isAdmin: true,
      };
      //   this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName,
      isAdmin: false,
    };
    // this.messageService.addMessage(
    //   `User: ${this.currentUser.userName} logged in`,
    // );
  }

  logout(): void {
    this.currentUser = undefined;
  }
}
