import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-price-list-format',
  templateUrl: './price-list-format.component.html',
  styleUrl: './price-list-format.component.scss',
})
export class PriceListFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  data = contentDataRu.wholesalers.priceListFormat;
  dataSource = this.data.table;
}
