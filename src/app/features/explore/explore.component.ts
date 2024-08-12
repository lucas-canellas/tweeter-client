import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  filteredValue: string = 'Top';
  menuOptions: string[] = ['Top', 'Latest', 'People', 'Media'];

  constructor() { }

  ngOnInit(): void {
  }

}
