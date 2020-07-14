import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from '../shared/components/tabs/tabs.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  @ViewChild(TabsComponent, {static: false}) tabsComponent;

  favorites = [
    {
      id: 1,
      name: 'my favorite list',
      bookNames: 'Lord of the rings, Poems'
  }
  ];

  onAddFavorite() { }
}
