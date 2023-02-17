import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{path: '', children: [{path: '', component: CartComponent}]}])
  ]
})
export class CartModule { }
