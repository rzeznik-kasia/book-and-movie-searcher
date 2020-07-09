import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  getBook() {
    return {title: "aa", author: "bb"}
  }
}
