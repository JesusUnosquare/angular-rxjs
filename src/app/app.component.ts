import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar></app-top-bar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent  {}