import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IBook } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  searchUrl = 'http://openlibrary.org/search.json';
  coverUrl = 'http://covers.openlibrary.org/b/id/';
  bookUrl = 'https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=OLID:'

  private searchPhraseSubject = new Subject<string>();
  searchPhraseAction$ = this.searchPhraseSubject.asObservable();

  searchResults$ = this.searchPhraseAction$.pipe(
      switchMap(phrase => this.http.get<any>(`${this.searchUrl}?q=${phrase}`)
      .pipe(
        map(result => result.docs),
        map(books => books.map(book => ({
          title: book.title,
          author: book.author_name ? book.author_name[0] : '',
          image: book.cover_i + '-S.jpg',
          edition_key: book.edition_key ? book.edition_key[0]: '',
        }) as IBook)),
      )
    )
  );

  constructor(private http: HttpClient) {}

  searchForBooks(phrase: string) {
    this.searchPhraseSubject.next(phrase);
  }

}
