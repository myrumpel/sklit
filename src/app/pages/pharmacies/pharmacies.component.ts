import { Component } from '@angular/core';
import { pharmaciesLinks } from '../../data/pharmacies-links';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrl: './pharmacies.component.scss',
})
export class PharmaciesComponent {
  items = pharmaciesLinks;
}
