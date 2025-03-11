import { Component } from '@angular/core';

@Component({
  selector: 'cas-header',
  imports: [],
  template: `<h1>Welcome {{ title }}</h1>`,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Demo Angular';

  constructor() {
    console.log('HeaderComponent');
  }
}
