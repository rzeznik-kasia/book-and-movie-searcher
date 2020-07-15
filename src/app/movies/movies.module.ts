import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [MoviesRoutingModule.components],
  imports: [MoviesRoutingModule],
  providers: [MoviesService]
})
export class MoviesModule { }
