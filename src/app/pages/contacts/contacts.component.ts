import { Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  data = contentDataRu.contacts;
}
