import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './features/explore/explore.component';
import { BookmarksComponent } from './features/bookmarks/bookmarks.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"explore", component: ExploreComponent},
  {path:"bookmarks", component: BookmarksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
