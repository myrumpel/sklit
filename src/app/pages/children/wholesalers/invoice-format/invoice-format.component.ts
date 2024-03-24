import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
interface elementData {
  code: string;
  description: string;
}

@Component({
  selector: 'app-invoice-format',
  templateUrl: './invoice-format.component.html',
  styleUrl: './invoice-format.component.scss',
})
export class InvoiceFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  data = contentDataRu.wholesalers.invoiceFormat;
  dataSource = this.data.table;
}
