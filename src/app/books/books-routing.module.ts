import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksTableComponent } from './books-table/books-table.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
    { path: '', component: BooksComponent },
    { path: ':olid', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
  static components = [BooksComponent, BooksTableComponent, BookDetailsComponent];
}
