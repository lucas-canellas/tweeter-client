import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-menu',
  templateUrl: './explore-menu.component.html',
  styleUrls: ['./explore-menu.component.scss']
})
export class ExploreMenuComponent implements OnInit {


  @Input() options: string[] = [];
  @Input() currentValue: string = "";

  filterExplore(event: Event) {
    const spanElement = event.target as HTMLElement;
    this.currentValue = spanElement.textContent || '';
  }

  getTextColor(option: string): string {
    return this.currentValue === option ? '#2F80ED' : '#828282';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
