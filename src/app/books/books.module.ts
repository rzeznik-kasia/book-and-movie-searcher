import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [BooksRoutingModule.components],
  imports: [CommonModule, BooksRoutingModule],
  exports: [CommonModule]
})
export class BooksModule { }
