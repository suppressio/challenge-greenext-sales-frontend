import { Component, OnDestroy, OnInit } from '@angular/core';import { ShoppingCart } from 'src/app/models/data.types';
;
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  shoppingCart:any;
  dataSource:any;

  receipt:any;

  columns: string[] = ['id', 'name', 'price', 'tax', 'qty', 'del'];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart.subscribe(c=> this.shoppingCart = c);
  }

  get cart(){
    return this.cartService.shoppingCart;
  }

  newCart(){
    this.receipt = undefined;
    this.cartService.newCart();
  }

  removeFromCart(idShoppedArt:number, qty?: number){
    this.receipt = undefined;
    this.cartService.removeFromCart(idShoppedArt, qty? qty : 1);
  }

  addToCart(idArt:number, qty?: number){
    this.receipt = undefined;
    this.cartService.addToCart(idArt, qty? qty : 1);
  }

  quickBasket1(){
    this.receipt = undefined;
    this.cartService.quickBasket1();
  }

  quickBasket2(){
    this.receipt = undefined;
    this.cartService.quickBasket2();
  }

  quickBasket3(){
    this.receipt = undefined;
    this.cartService.quickBasket3();
  }

  generateReceipt(){
    this.cartService.getReceipt().subscribe(
      rec => this.receipt = rec);
  }

  ngOnDestroy(): void {
    this.receipt = undefined;
  }
}
