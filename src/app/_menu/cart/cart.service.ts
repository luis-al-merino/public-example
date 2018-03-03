import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CartObject } from '../cart/cart';
import { ProductObject } from '../../_tile/tile';

@Injectable()
export class CartService {

  constructor() { }

  private addedToCartSource = new Subject<ProductObject>();

  addedToCart$ = this.addedToCartSource.asObservable();

  addToCart(product: ProductObject) {
    this.addedToCartSource.next(product);
  }

}
