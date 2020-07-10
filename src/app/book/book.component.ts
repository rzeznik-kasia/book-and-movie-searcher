import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BookService } from './services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
  searchResults$ = this.bookService.searchResults$;
  constructor(private bookService: BookService) { }

  search(phrase: string) {
    this.bookService.searchForBooks(phrase);
  }

}
