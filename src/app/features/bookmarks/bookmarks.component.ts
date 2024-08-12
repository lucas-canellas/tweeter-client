import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  filteredValue: string = 'Tweets';
  menuOptions: string[] = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];

  constructor() { }

  ngOnInit(): void {
  }

}
