import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-favorites-form',
  templateUrl: './favorites-form.component.html'
})
export class FavoritesFormComponent implements OnInit {
  favoriteForm: FormGroup;

  @Input() favorite;
  @Output() saveFavorite = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.favoriteForm = this.fb.group({
      id: '',
      listName: '',
      booksOnTheList: ''
    });
  }

  ngOnInit() {
    this.favoriteForm.setValue({
      id: this.favorite.id || -1,
      listName: this.favorite.listName || '',
      booksOnTheList: this.favorite.booksOnTheList || ''
    });
  }

  onFavoritesFormSubmit() {
    let dataModel = this.favoriteForm.value;
    this.saveFavorite.emit(dataModel);
  }
}
