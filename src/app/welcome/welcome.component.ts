import { Component } from '@angular/core';

import { User } from '../_models/user';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  user: User | null;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
