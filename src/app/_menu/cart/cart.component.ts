import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartObject } from './cart';
import { CartService } from './cart.service';
import { ProductObject } from '../../_tile/tile';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: CartObject = {
      products: [],
      productCount: 0,
      totalPrice: 0
    };
  /*
  cart: CartObject = {
    products: [{
      'id': 5,
      'name': `Assassin's creed: Director's cut`,
      'image': '../../../assets/img-assassinsCreed.png',
      'price': 9.99,
      'status': 'inCart',
      'url': 'https://www.gog.com/game/assassins_creed_directors_cut'
    }, {
      'id': 3,
      'name': 'The Settlers 2: Gold Edition',
      'image': '../../../assets/img-settlersII.png',
      'price': 5.99,
      'status': 'inCart',
      'url': 'https://www.gog.com/game/the_settlers_2_gold_edition'
    }],
    // @TODO: set totalPrice and discount as sum from products
    totalPrice: 15.97,
  };
  */
  private subscription: Subscription;
  isCartVisible = false;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.subscription = this.cartService.addedToCart$.subscribe((product: ProductObject) => {
      product.totalPrice = product.discount ? _.floor(product.price * ( 1 - product.discount * 0.01), 2) : product.price;

      this.cart.totalPrice += product.totalPrice;
      this.cart.products = [...this.cart.products, product];

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeFromCart(productRemoved: ProductObject) {
    productRemoved.status = 'onSale';
    this.cart.totalPrice -= productRemoved.totalPrice;
    this.cart.products =  this.cart.products.filter(product =>  product.id !== productRemoved.id );
  }

  emptyCart() {
    this.cart.products.map(product => {
      product.status = 'onSale';
    });
    this.isCartVisible = this.cart.products.length !== 0 ? false : true;
    this.cart = {
      products: [],
      productCount: 0,
      totalPrice: 0.00,
    };
  }

  showCart() {
    this.isCartVisible = true;
  }

  hideCart() {
    this.isCartVisible = false;
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }
}
