import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { ExploreMenuComponent } from './components/explore-menu/explore-menu.component';
import { ExploreSearchComponent } from './components/explore-search/explore-search.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { TrendsComponent } from './components/trends/trends.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    ExploreMenuComponent,
    ExploreSearchComponent,
    PostComponent,
    CreatePostComponent,
    TrendsComponent,
    HeaderProfileComponent
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
    ExploreSearchComponent,
    PostComponent,
    CreatePostComponent,
    TrendsComponent,
    HeaderProfileComponent
  ]
})
export class SharedModule { }
