import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { routes } from './app.routes';

export type MenuItem = {
  path: string;
  label: string;
};

@Component({
  selector: 'cas-root',
  imports: [RouterOutlet, MenuComponent, HeaderComponent, FooterComponent],
  //styles:,
  template: `
    <cas-header>
      <cas-menu [items]="routesR" />
    </cas-header>
    <main>
      <router-outlet />
    </main>
    <cas-footer></cas-footer>
  `,
})
export class AppComponent {
  routesR: MenuItem[];
  constructor() {
    this.routesR = routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        path: route.path!,
        label: route.data!['label'] as string,
      }));
  }
}
