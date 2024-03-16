import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-remote-access',
  templateUrl: './remote-access.component.html',
  styleUrl: './remote-access.component.scss',
})
export class RemoteAccessComponent {
  data = contentDataRu.pharmacies.remoteAccess;
}
