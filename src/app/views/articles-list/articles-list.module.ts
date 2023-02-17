import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    ArticlesListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{path: '', children: [{path: '', component: ArticlesListComponent}]}])
  ]
})
export class ArticlesListModule { }
