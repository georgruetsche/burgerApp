import { Action } from '@ngrx/store';
import { Item } from '../models/item';

export const CART_ADD_ITEM = '[Cart] Change Item amount';
export const CART_LOAD = '[Cart] Load';
export const CART_LOADED = '[Cart] Loaded';

export class CartAddItemAction implements Action {
    // Jede Action hat ein type-Parameter. An dem type-Paramter erkennt der Reducer oder Effect
    // ob er bei dieser Action handeln soll
    type = CART_ADD_ITEM;
    constructor(public itemId: string) {}
}
export class CartLoadAction implements Action {
    type = CART_LOAD;
    constructor() {}
}

export class CartLoadedAction implements Action {
    type = CART_LOADED;
    constructor(public items: Array<Item>) {}
}
