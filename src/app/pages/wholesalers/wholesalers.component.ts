import { Component } from '@angular/core';
import { wholesalersLinks } from '../../data/wholesalers-links';

@Component({
  selector: 'app-wholesalers',
  templateUrl: './wholesalers.component.html',
  styleUrl: './wholesalers.component.scss',
})
export class WholesalersComponent {
  items = wholesalersLinks;
}
