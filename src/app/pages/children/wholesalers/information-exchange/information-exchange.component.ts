import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-information-exchange',
  templateUrl: './information-exchange.component.html',
  styleUrl: './information-exchange.component.scss',
})
export class InformationExchangeComponent {
  data = contentDataRu.wholesalers.informationExchange;
}
