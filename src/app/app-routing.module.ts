import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


export enum Paths{
  home='',
  articles='arts',
  cart='cart'
}

const routes: Routes = [
  // { path: Paths.home, component: LayoutComponent,
  //     loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  // { path: Paths.home, redirectTo: Paths.articles },
  { path: Paths.articles, component:LayoutComponent,
      loadChildren: () => import('./views/articles-list/articles-list.module').then(m => m.ArticlesListModule) },
  { path: Paths.cart, component:LayoutComponent,
      loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule) },
  { path: '**', redirectTo: Paths.articles },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


