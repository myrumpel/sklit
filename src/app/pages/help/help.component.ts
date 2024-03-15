import { Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpComponent {
  data = contentDataRu.help;
}
