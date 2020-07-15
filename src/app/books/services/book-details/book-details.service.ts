import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IBook } from '../../book';

@Injectable()
export class BookDetailsService {
  private bookUrl = 'https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=OLID:';

  private bookSelectedSubject = new BehaviorSubject<string>('');
  bookSelectedAction$ = this.bookSelectedSubject.asObservable();

  selectedBook$ = this.bookSelectedAction$.pipe(
    switchMap(olid => this.http.get<any>(this.bookUrl + olid)
    .pipe(
      map(olidObject => {
        let book;
        for (var key in olidObject) {
          if (olidObject.hasOwnProperty(key)) {
            book = olidObject[key];
          }
        }  

        return {
          publisher: book.publishers[0].name ,
          isbn: book.identifiers.isbn_13,
          title: book.title,
          number_of_pages: book.number_of_pages,
          publish_date: book.publish_date,
          author_name: book.authors[0].name
        } as IBook;
      })
      )
    )
  )

  constructor(private http: HttpClient) { }

  onBookSelected(bookOlid: string): void {
    this.bookSelectedSubject.next(bookOlid);
  }
}
