import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IBookEdition } from '../bookEdition';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksCardComponent implements OnInit {
  @Input() bookEditions: IBookEdition[] = [];

  constructor() { }

  ngOnInit() {
  }

}
