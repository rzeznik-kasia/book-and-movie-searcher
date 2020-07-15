import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsService } from '../services/book-details/book-details.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  selectedBook$ = this.bookDetailsService.selectedBook$;

  constructor(private route: ActivatedRoute,
    private bookDetailsService: BookDetailsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('olid');
    this.bookDetailsService.onBookSelected(id);
  }

}
