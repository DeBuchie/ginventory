import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gin-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onNavbarToggleClick() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
