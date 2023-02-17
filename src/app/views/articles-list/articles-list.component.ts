import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/data.types';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from '../cart/cart.service';

export enum CategoryIcons {
  General = "local_grocery_store",
  Books = "library_books",
  Food = "fastfood",
  Medical = "local_hospital"
}

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] | undefined;

  constructor(
    private api: ApiService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getArtsList();
  }

  getArtsList(): void{
    this.api.getArticles().subscribe(
      res => this.articles = res);
  }

  getCategoryIcon(category:string) {
    switch (category){
      case "General": return CategoryIcons.General;
      case "Books": return CategoryIcons.Books;
      case "Food": return CategoryIcons.Food;
      case "Medical": return CategoryIcons.Medical;
    }
    return CategoryIcons.General;
  }

  addToCart(idArt:number){
    this.cartService.addToCart(idArt, 1);
  }
}
