import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment as env } from 'src/environments/environment';
import { Article, Receipt, ShoppingCart } from '../models/data.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
    ) { }

  /** Articles */

  public getArticles(): Observable<Article[]>{
    const url = `${env.baseUrl}/api/Articles/GetArticles`;
    return this.http.get<Article[]>(url);
  }

  public getArticle(id: number): Observable<Article>{
    const url = `${env.baseUrl}/api/Articles/GetArt`;
    return this.http.get<Article>(url, {params: {idArt: id} });
  }


  /** Shopping Cart */

  public getCart(): Observable<ShoppingCart>{
    const url = `${env.baseUrl}/api/Shop/GetShCart`;
    return this.http.get<ShoppingCart>(url);
  }

  public addToCart(idArt:number, qty:number): Observable<any>{
    const url = `${env.baseUrl}/api/Shop/AddToShCart`;
    return this.http.get<any>(url, {params: {idArt, qty} });
  }

  public remoFromCart(idShoppedArt:number, qty:number): Observable<any>{
    const url = `${env.baseUrl}/api/Shop/RemToShCart`;
    return this.http.get<any>(url, {params: {idShoppedArt, qty} });
  }

  public newCart(): Observable<ShoppingCart>{
    const url = `${env.baseUrl}/api/Shop/SetNewCart`;
    return this.http.get<ShoppingCart>(url);
  }

  public getReceipt(): Observable<Receipt>{
    const url = `${env.baseUrl}/api/Shop/GetReceipt`;
    return this.http.get<Receipt>(url);
  }
}
