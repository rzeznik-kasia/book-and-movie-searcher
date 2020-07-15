import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, DynamicTabsDirective, TabsComponent, TabComponent],
  declarations: [DynamicTabsDirective, TabsComponent, TabComponent],
  entryComponents: [TabComponent]
})
export class SharedModule { }
