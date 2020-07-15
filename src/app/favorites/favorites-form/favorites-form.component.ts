import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IFavoritesBooks } from '../favorites-books';

@Component({
  selector: 'app-favorites-form',
  templateUrl: './favorites-form.component.html'
})
export class FavoritesFormComponent implements OnInit {
  favoriteForm: FormGroup;

  @Input() favorite: IFavoritesBooks;
  @Output() saveFavorite = new EventEmitter<IFavoritesBooks>();

  constructor(private fb: FormBuilder) {
    this.favoriteForm = this.fb.group({
      id: 0,
      listName: '',
      booksOnTheList: ''
    });
  }

  ngOnInit() {
    this.favoriteForm.setValue({
      id: this.favorite.id || -1,
      listName: this.favorite.listName || '',
      booksOnTheList: this.favorite.booksOnTheList || ''
    } as IFavoritesBooks);
  }

  onFavoritesFormSubmit() {
    let dataModel = this.favoriteForm.value;
    this.saveFavorite.emit(dataModel as IFavoritesBooks);
  }
}
