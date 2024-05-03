import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
