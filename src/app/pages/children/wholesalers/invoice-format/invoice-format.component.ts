import { Component } from '@angular/core';
import { INVOICE_FORMAT } from '../../../../data/tables/invoice-format';
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
  dataSource = INVOICE_FORMAT;
}
