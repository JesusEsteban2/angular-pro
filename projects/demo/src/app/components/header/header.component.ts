import { Component } from '@angular/core';

@Component({
  selector: 'cas-header',
  imports: [],
  styles: `
    :host {
      display: block;
      text-align: center;
    }
  `,
  template: ` <header>
    <h1>Welcome {{ title }}</h1>
    <ng-content></ng-content>
  </header>`,
})
export class HeaderComponent {
  title = 'Angular Demo';

  constructor() {
    console.log('this.title');
  }
}
