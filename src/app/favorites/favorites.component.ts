import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from '../shared/components/tabs/tabs.component';
import { FavoritesSharingService } from '../core/services/favorites-sharing.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {
  @ViewChild('favoritesForm', {static: false}) favoritesFormTemplate;
  @ViewChild(TabsComponent, {static: false}) tabsComponent;

  constructor(private favoritesSharingService: FavoritesSharingService) { }

  favorites = [
    {
      id: 1,
      listName: 'my favorite list',
      booksOnTheList: 'Lord of the rings, Poems'
    }
  ];

  onEditFavorite(favorite) {
    this.tabsComponent.openTab(
      `Editing: ${favorite.listName}`,
      this.favoritesFormTemplate,
      favorite,
      true
    );
  }

  onAddFavorite() {
    this.tabsComponent.openTab('New list', this.favoritesFormTemplate, {}, true);
  }

  onFavoriteFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.favorites = this.favorites.map(favorite => {
        if (favorite.id === dataModel.id) {
          return dataModel;
        } else {
          return favorite;
        }
      });
    } else {
      dataModel.id = Math.round(Math.random() * 100);
      this.favorites.push(dataModel);
    }
    this.tabsComponent.closeActiveTab();
  }
}
