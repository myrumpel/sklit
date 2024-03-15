import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  data = contentDataRu.representatives.report;
}
