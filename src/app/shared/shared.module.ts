import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { ExploreMenuComponent } from './components/explore-menu/explore-menu.component';
import { ExploreSearchComponent } from './components/explore-search/explore-search.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    ExploreMenuComponent,
    ExploreSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatDividerModule
  ],
  exports: [
    NavigationBarComponent,
    ExploreMenuComponent,
    ExploreSearchComponent
  ]
})
export class SharedModule { }
