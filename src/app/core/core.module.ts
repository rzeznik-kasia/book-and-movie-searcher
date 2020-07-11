import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class CoreModule {}
