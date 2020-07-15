import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsService } from './services/book-details/book-details.service';
import { BookEditionsService } from './services/book-editions/book-editions.service';

@NgModule({
  declarations: [BooksRoutingModule.components],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
  exports: [CommonModule],
  providers: [BookDetailsService, BookEditionsService]
})
export class BooksModule { }
