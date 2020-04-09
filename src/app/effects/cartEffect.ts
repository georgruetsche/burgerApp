import { CartLoadedAction } from './../actions/cartAction';
import { CartService } from './../services/cartService';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as cartActions from '../actions/cartAction';

// Für das Laden des Warenkorbes wir dein Effect verwendet. 
// Es lauscht auf die Action CardLoadAction und lädt den Korb mit Hilfe des CartServices
@Injectable()
export class CartEffect {
    constructor(private cartService: CartService, private actions: Actions) 
    {}

    @Effect()
    update: Observable<Action> = this.actions.pipe(
        ofType(cartActions.CART_LOAD),
        switchMap(() =>
            this.cartService
                .getCartItems().pipe(
                map(data => new cartActions.CartLoadedAction(data)))));
}