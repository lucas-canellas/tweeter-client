import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-menu',
  templateUrl: './explore-menu.component.html',
  styleUrls: ['./explore-menu.component.scss']
})
export class ExploreMenuComponent implements OnInit {

  filteredValue: string = 'Top';
  menuOptions: string[] = ['Top', 'Latest', 'People', 'Media'];

  filterExplore(event: Event) {
    const spanElement = event.target as HTMLElement;
    this.filteredValue = spanElement.textContent || '';
  }

  getTextColor(option: string): string {
    return this.filteredValue === option ? '#2F80ED' : '#828282';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
