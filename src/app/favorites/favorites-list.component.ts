import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorites-list',
  template: `
    <table class="table table-striped">
      <thead>
        <th>Name</th>
        <th>Book names</th>
        <th></th>
      </thead>
      <tbody>
        <tr *ngFor="let f of favorites">
          <td>{{ f.name }}</td>
          <td>{{ f.bookNames }}</td>
          <td><button class="btn btn-sm btn-default" (click)="editFavorite.emit(f)">Edit</button></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-default" (click)="addFavorite.emit()">Add new favorite</button>
  `
})
export class FavoritesListComponent {
  @Input() favorites;
  @Output() addFavorite= new EventEmitter<any>();
}
