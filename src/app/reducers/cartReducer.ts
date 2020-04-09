import * as cartAction from '../actions/cartAction';
import { Item } from '../models/item';
import { Action } from '@ngrx/store';
import { AppModule } from '../app.module';

//Reducer ist eine pure-Function, deshalb ist das Laden über http
//nicht über einen Reducer sinnvoll. Hierfür verweden wir ein Effect.
export function cartReducer(state: Item[] = [], action: Action) {
    switch(action.type) {
        case cartAction.CART_ADD_ITEM:
            // State mit [...state] klonen, ist ein Paradigam von Redux
            let newState = [...state];
            let itemIndex = newState.findIndex(x => x.id === (<cartAction.CartAddItemAction> action ).itemId);
            let mutatetState = {...newState[itemIndex]}
            mutatetState.amount++;
            newState[itemIndex] = mutatetState;
            return newState;
        case cartAction.CART_LOADED:
            return (<cartAction.CartLoadedAction> action).items;
        default:
            return state;
    }

}