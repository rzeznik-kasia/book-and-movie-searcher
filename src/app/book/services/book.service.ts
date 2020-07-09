import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  hardcodedBookSample$ = this.http.get<any>(`http://openlibrary.org/search.json?q=the+lord+of+the+rings`);

  constructor(private http: HttpClient) {}

}
