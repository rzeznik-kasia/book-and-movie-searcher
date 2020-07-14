import { NgModule } from '@angular/core';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FavoritesRoutingModule.components],
  imports: [
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
