import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html'
})
export class FavoritesListComponent {
  @Input() favorites;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() editFavorite = new EventEmitter<any>();
}