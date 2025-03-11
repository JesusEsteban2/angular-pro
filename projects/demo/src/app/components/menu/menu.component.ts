import { Component } from '@angular/core';

@Component({
  selector: 'cas-menu',
  imports: [],
  styleUrl: './menu.component.css',
  template: `
  <nav>
  <ul>
  @for (item of items; track $index) {
    <li>
    <a [href]="item.path">{{item.label}}</a>
    </li>
  }
  ',

})
export class MenuComponent {
  items = [
    { path: '/', label: 'Home' },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/contact',
      label: 'Contact',
    },
  ];
}
