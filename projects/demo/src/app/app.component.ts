import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'cas-root',
  imports: [RouterOutlet, MenuComponent, HeaderComponent, FooterComponent],
  //styles:,
  template: `
    <cas-header>
      <cas-menu />
    </cas-header>
    <main>
      <router-outlet />
    </main>
    <cas-footer></cas-footer>
  `,
})
export class AppComponent {}
