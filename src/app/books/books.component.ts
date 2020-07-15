import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BookEditionsService } from './services/book-editions/book-editions.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {
  bookEditionsForSearchedPhrase$ = this.bookEditionsService.bookEditionsForSearchedPhrase$;
  
  constructor(private bookEditionsService: BookEditionsService) { }

  search(phrase: string) {
    this.bookEditionsService.searchForBookEditions(phrase);
  }

}
