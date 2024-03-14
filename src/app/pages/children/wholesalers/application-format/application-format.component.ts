import { Component } from '@angular/core';
import { APPLICATION_FORMAT } from '../../../../data/tables/application-format';

@Component({
  selector: 'app-application-format',
  templateUrl: './application-format.component.html',
  styleUrl: './application-format.component.scss',
})
export class ApplicationFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  dataSource = APPLICATION_FORMAT;
}
