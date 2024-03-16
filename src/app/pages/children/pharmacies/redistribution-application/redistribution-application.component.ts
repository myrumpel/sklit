import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-redistribution-application',
  templateUrl: './redistribution-application.component.html',
  styleUrl: './redistribution-application.component.scss',
})
export class RedistributionApplicationComponent {
  data = contentDataRu.pharmacies.redistributionApplication;
}
