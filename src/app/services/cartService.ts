import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class CartService {

    constructor(private http: HttpClient) {}

    getCartItems(): Observable<Item[]> {
        return this.http.get<any>('assets/cart.json');
    }
}