import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { ExploreMenuComponent } from './components/explore-menu/explore-menu.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    ExploreMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatDividerModule
  ],
  exports: [
    NavigationBarComponent,
    ExploreMenuComponent
  ]
})
export class SharedModule { }
