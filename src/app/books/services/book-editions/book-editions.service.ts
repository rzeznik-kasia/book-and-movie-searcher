import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { switchMap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { IBookEdition } from '../../book-edition';

@Injectable()
export class BookEditionsService {
  private searchUrl = 'http://openlibrary.org/search.json';
  private coverUrl = 'http://covers.openlibrary.org/b/id/';

  private searchPhraseSubject = new Subject<string>();
  private searchPhraseAction$ = this.searchPhraseSubject.asObservable();

  bookEditionsForSearchedPhrase$ = this.searchPhraseAction$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(phrase => this.http.get<any>(`${this.searchUrl}?q=${phrase}`)
      .pipe(
        map(result => result.docs),
        map(bookEditions => bookEditions.map(bookEdition => ({
          title: bookEdition.title,
          author: bookEdition.author_name ? bookEdition.author_name[0] : '',
          bookCover: bookEdition.cover_i + '-S.jpg',
          edition_key: bookEdition.edition_key ? bookEdition.edition_key[0]: '',
        }) as IBookEdition)),
      )
    )
  );

  constructor(private http: HttpClient) {}

  searchForBookEditions(phrase: string) {
    this.searchPhraseSubject.next(phrase);
  }

}
