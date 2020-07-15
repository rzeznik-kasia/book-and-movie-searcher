import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BooksRoutingModule.components],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
  exports: [CommonModule]
})
export class BooksModule { }
