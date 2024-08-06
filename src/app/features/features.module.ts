import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';



@NgModule({
  declarations: [
    HomeComponent,
    ExploreComponent,
    BookmarksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
