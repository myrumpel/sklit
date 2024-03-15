import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-view-price',
  templateUrl: './view-price.component.html',
  styleUrl: './view-price.component.scss',
})
export class ViewPriceComponent {
  data = contentDataRu.shared.viewPrice;
}
