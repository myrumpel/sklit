import { Component } from '@angular/core';
import { DISCLAIMER_FORMAT } from '../../../../data/tables/disclaimer-format';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-disclaimer-format',
  templateUrl: './disclaimer-format.component.html',
  styleUrl: './disclaimer-format.component.scss',
})
export class DisclaimerFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  data = contentDataRu.wholesalers.disclaimerFormat;
  dataSource = this.data.table;
}
