import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {
  bookEditionsForSearchedPhrase$ = this.booksService.bookEditionsForSearchedPhrase$;
  
  constructor(private booksService: BooksService) { }

  search(phrase: string) {
    this.booksService.searchForBookEditions(phrase);
  }

}
