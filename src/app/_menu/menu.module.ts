import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent,
    CartComponent
  ],
  exports: [
    MenuComponent
  ],
  providers: [CartService]
})
export class MenuModule { }
