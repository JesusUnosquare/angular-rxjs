import { Component, OnInit } from '@angular/core';
import { MyStore } from '../store';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Products</h2>
    <div *ngFor="let product of products | async; let i = index">
      <h3>{{ i + 1}}. {{ product.name }}</h3>
      <button (click)="addToCart(i)"
              [textContent]="product.addedToCart ? 'Added to Cart' : 'Add to Cart'">
      </button>
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  public products;

  constructor(private readonly store$: MyStore) {}

  ngOnInit() {
    this.products = this.store$.getState();
  }

  addToCart(i) {
    const ADD_TO_CART = (index) => {
      return {
        type: 'ADD_TO_CART',
        payload: { index },
      };
    };
    this.store$.dispatch(ADD_TO_CART(i));
    //Original logic
    //this.products[i].addedToCart = true;
  }
}
