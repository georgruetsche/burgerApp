import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../models/state';
import { Item } from '../models/item';
import { CartLoadAction, CartAddItemAction } from '../actions/cartAction';

@Component({
  selector: 'burger-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  
  public cart: Observable<Item[]>;

  constructor(public store: Store<State>) {
    this.cart = store.pipe(select((state: State) => state.cart));
    console.log(this.cart);
  }

  ngOnInit() {
    this.store.dispatch(new CartLoadAction());
  }

  onItemAdd(itemId: string) {
    this.store.dispatch(new CartAddItemAction(itemId));
  }
}
