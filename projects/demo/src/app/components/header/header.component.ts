import { Component } from '@angular/core';

@Component({
  selector: 'cas-header',
  imports: [],
  template: ` <header>
    <h1>Welcome {{ title }}!</h1>
    <ng-content></ng-content>
  </header>`,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Demo Angular';

  constructor() {
    console.log('HeaderComponent');
  }
}
