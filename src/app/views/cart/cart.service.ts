import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, forkJoin, concatMap, of } from 'rxjs';
import { Receipt, ShoppingCart } from 'src/app/models/data.types';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private _cart = new BehaviorSubject<ShoppingCart>({id:0, arts:[], totPrice:0, totSalesTaxes:0});
  private count:number = 0;
  private _cartCount = new BehaviorSubject<number>(this.count);

  constructor(
    private api: ApiService
  ) { }

  init(): void {
    this.getCart();
  }

  private getCart():void{
    this.api.getCart().subscribe(
      res => this._cart.next(res));
  }

  addToCart(idArt:number, qty: number):void{
    this.api.addToCart(idArt, qty).subscribe(
      ()=>this.getCart());
  }

  removeFromCart(idShoppedArt:number, qty: number):void{
    this.api.remoFromCart(idShoppedArt, qty).subscribe(
      ()=>this.getCart());
  }

  newCart():void{
    this.api.newCart().subscribe(
      res => this._cart.next(res));
  }

  getReceipt(): Observable<Receipt>{
    return this.api.getReceipt();
  }

  get shoppingCart(): Observable<ShoppingCart>{
    if (!this._cart)
      this.getCart();
    return this._cart;
  };

  get cartCount():Observable<number>{
    this._cart.subscribe(c=>{
      this.count = 0;
      c?.arts?.forEach(a=> this.count += a.qty);
      this._cartCount.next(this.count);
    });
    return this._cartCount;
  };

  quickBasket1(){
    this.api.newCart().subscribe(()=>
    this.api.addToCart(1, 2).subscribe(()=>
    this.api.addToCart(2, 1).subscribe(()=>
    this.api.addToCart(3, 1).subscribe(()=>
    this.getCart()))));
  }

  quickBasket2(){
    this.api.newCart().subscribe(()=>
    this.api.addToCart(4, 1).subscribe(()=>
    this.api.addToCart(5, 1).subscribe(()=>
    this.getCart())));
  }

  quickBasket3(){
    this.api.newCart().subscribe(()=>
    this.api.addToCart(6, 1).subscribe(()=>
    this.api.addToCart(7, 1).subscribe(()=>
    this.api.addToCart(8, 1).subscribe(()=>
    this.api.addToCart(9, 3).subscribe(()=>
    this.getCart())))));
  }
}
