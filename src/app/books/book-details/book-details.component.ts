import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsService } from '../services/book-details/book-details.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private bookDetailsService: BookDetailsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('olid');
    
  }

}
