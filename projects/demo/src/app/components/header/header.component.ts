import { Component } from '@angular/core';

@Component({
  selector: 'cas-header',
  imports: [],
  styles: `
    :host {
      display: block;
      text-align: center;
    }
    img,
    h1 {
      display: inline-flex;
      margin-right: 20px;
    }
  `,
  template: ` <header>
    <img src="./assets/favicon.svg" alt="Logo" />
    <h1>Welcome {{ title }}</h1>
    <ng-content></ng-content>
  </header>`,
})
export class HeaderComponent {
  title = 'Angular Demo';

  constructor() {
    console.log(this.title);
  }

  ngOnInit() {
    console.log('On Init HeaderComponent');
  }

  ngOnDestroy() {
    console.log('On Destroy HeaderComponent');
  }
}
