import { Component } from '@angular/core';
import { representativesLinks } from '../../data/representatives-links';

@Component({
  selector: 'app-representatives',
  templateUrl: './representatives.component.html',
  styleUrl: './representatives.component.scss',
})
export class RepresentativesComponent {
  items = representativesLinks;
}
