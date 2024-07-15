import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { AccountService } from './account/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Biblioteca Sistema';
  themeMode: string;
  user?: User | null;
  constructor(private accountService: AccountService) {
    this.themeMode = 'Light';
    this.accountService.user.subscribe((x) => (this.user = x));
  }
  toggleTheme(event: any) {
    const theme = event.target.checked ? 'Dark' : 'Light';
    const body = document.body as HTMLElement;
    body.setAttribute('data-bs-theme', theme.toLowerCase());
    this.themeMode = theme;
  }
  logout() {
    this.accountService.logout();
  }
}
