import { Component, OnInit, Input } from '@angular/core';
import { ProductObject } from './tile';
import { CartService } from '../_menu/cart/cart.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() _tile: ProductObject;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
  }

  addItemToCart() {
    this.cartService.addToCart(this._tile);
    this._tile.status = 'inCart';
  }
}
