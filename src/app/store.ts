import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyStore {
  private initialState = [
    { name: 'Laptop Air', price: 799, addedToCart: false },
    { name: 'Laptop Pro', price: 699, addedToCart: false },
    { name: 'Laptop Mini', price: 299, addedToCart: false },
  ];
  private state$;
  private currentState = this.initialState;

  public getState() {
    //return this.currentState;
    this.state$ = new BehaviorSubject(this.currentState);
    return this.state$;
  }

  public dispatch(action) {
    this.currentState = this.reducer(this.currentState, action);
    this.state$.next(this.currentState);
    console.log(action);
  }

  public reducer(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return state.map((product, index) => {
          if (index === action.payload.index) {
            return Object.assign({}, product, { addedToCart: true });
          }
          return product;
        });
    }
  }
}
