import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { Store } from '@ngrx/store';
import { State } from '../models/state';

@Component({
  selector: 'burger-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent {
  cart: Observable<Item[]>;
  sum: number = 0;


  constructor(public store: Store<State>) {
    this.cart = store.select((state: State) => state.cart);
    this.cart.subscribe(c => this.updateSum(c));
  }

  updateSum(c: Item[]) {
    this.sum = 0;
    c.forEach(i => this.sum += i.amount);
  }
}
