import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.book = this.bookService.getBook();  
  }

}
