import { Component } from '@angular/core';
import { PRICE_LIST_FORMAT } from '../../../../data/tables/price-list-format';

@Component({
  selector: 'app-price-list-format',
  templateUrl: './price-list-format.component.html',
  styleUrl: './price-list-format.component.scss',
})
export class PriceListFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  dataSource = PRICE_LIST_FORMAT;
}
