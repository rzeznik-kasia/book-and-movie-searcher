import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IBookEdition } from '../book-edition';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksTableComponent implements OnInit {
  @Input() bookEditions: IBookEdition[] = [];

  constructor() { }

  ngOnInit() {
  }

}
