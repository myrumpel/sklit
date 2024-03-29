import { Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  data = contentDataRu.partnersPage;
  contacts = this.data.contacts;
}
