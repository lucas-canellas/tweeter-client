import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  filteredValue: string = 'Tweets';
  menuOptions: string[] = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];

  constructor() { }

  ngOnInit(): void {

  }

}
