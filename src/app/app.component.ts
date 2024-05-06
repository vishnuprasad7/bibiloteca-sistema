import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Biblioteca Sistema';
  themeMode: string;
  constructor() {
    this.themeMode = 'Light';
  }
  toggleTheme(event: any) {
    const theme = event.target.checked ? 'Dark' : 'Light';
    const body = document.body as HTMLElement;
    body.setAttribute('data-bs-theme', theme.toLowerCase());
    this.themeMode = theme;
  }
}
