import { Component } from '@angular/core';

@Component({
  selector: 'cas-footer',
  imports: [],
  styleUrl: './footer.component.css',
  template: `<p>
    {{ today.toDateString() }}-{{ today.toLocaleTimeString() }}
  </p>`,
})
export class FooterComponent {
  today = new Date();

  constructor() {
    console.log('FooterComponent');
  }
}
