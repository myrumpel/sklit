import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-individual-reports',
  templateUrl: './individual-reports.component.html',
  styleUrl: './individual-reports.component.scss',
})
export class IndividualReportsComponent {
  data = contentDataRu.pharmacies.individualReports;
}
