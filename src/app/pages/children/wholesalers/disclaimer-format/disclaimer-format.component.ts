import { Component } from '@angular/core';
import { INVOICE_FORMAT } from '../../../../data/tables/invoice-format';
import { DISCLAIMER_FORMAT } from '../../../../data/tables/disclaimer-format';

@Component({
  selector: 'app-disclaimer-format',
  templateUrl: './disclaimer-format.component.html',
  styleUrl: './disclaimer-format.component.scss',
})
export class DisclaimerFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  dataSource = DISCLAIMER_FORMAT;
}
