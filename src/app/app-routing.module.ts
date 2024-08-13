import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './features/explore/explore.component';
import { BookmarksComponent } from './features/bookmarks/bookmarks.component';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [
  {path:"", component: HomeComponent,},
  {path:"explore", component: ExploreComponent},
  {path:"bookmarks", component: BookmarksComponent},
  {path:":id", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
