import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from '../shared/components/tabs/tabs.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  @ViewChild('favoritesForm', {static: false}) favoritesFormTemplate;
  @ViewChild(TabsComponent, {static: false}) tabsComponent;

  favorites = [
    {
      id: '1',
      listName: 'my favorite list',
      booksOnTheList: 'Lord of the rings, Poems'
  }
  ];

  onAddFavorite() {
    this.tabsComponent.openTab('New Favorite', this.favoritesFormTemplate, {}, true);
  }

}
