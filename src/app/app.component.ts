import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'throbber';
  isMenuOpen = false;
  openSideMenu() {
    this.isMenuOpen = true;
  }
  closeSideMenu() {
    this.isMenuOpen = false;
  }
}
