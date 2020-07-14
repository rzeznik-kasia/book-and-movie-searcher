import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent {
  @Input() favorites;
  @Output() addFavorite = new EventEmitter<any>();

  @Output() editFavorite = new EventEmitter<any>();
}