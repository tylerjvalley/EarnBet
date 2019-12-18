import { Component, OnInit } from '@angular/core';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  faHeart = faHeart;
  faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }
 
}
