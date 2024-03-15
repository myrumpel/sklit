import { Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // animations: {},
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data = contentDataRu.homePage;
}
