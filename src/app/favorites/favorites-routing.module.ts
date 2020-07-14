import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { FavoritesListComponent } from './favorites-list.component';

const routes: Routes = [
  { path: '', component: FavoritesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FavoritesRoutingModule {
  static components = [ FavoritesComponent, FavoritesListComponent ];
}
