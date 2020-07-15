import { Injectable } from '@angular/core';
import { IFavoritesBooks } from 'src/app/favorites/favorites-books';

@Injectable({
  providedIn: 'root'
})
export class FavoritesSharingService {

  private storageName: string = "bookLists";

  constructor() { }

  setBookLists(data: IFavoritesBooks[]) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }
  
  getBookLists() {
    let data = localStorage.getItem(this.storageName);
    return JSON.parse(data);
  }
  
  clearBookLists() {
    localStorage.removeItem(this.storageName);
  }
  
  cleanAll() {
    localStorage.clear()
  }

}

