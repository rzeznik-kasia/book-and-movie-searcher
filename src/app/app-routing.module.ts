import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/books' },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/books' } 
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})  

export class AppRoutingModule { }
