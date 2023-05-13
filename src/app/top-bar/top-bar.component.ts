import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <a [routerLink]="['/']">
      <h1>Cheapkart</h1>
    </a>
  `
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}