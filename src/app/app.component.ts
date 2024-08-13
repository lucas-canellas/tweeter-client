import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  relativePath: string = '';
  isProfilePath: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.relativePath = this.router.url.split('/').slice(1).join('/');
      this.isProfilePath = !["explore", "bookmarks", ""].includes(this.relativePath);
    });
  }
}
