import { Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-dbf-editor',
  templateUrl: './dbf-editor.component.html',
  styleUrl: './dbf-editor.component.scss',
})
export class DbfEditorComponent {
  data = contentDataRu.wholesalers.dbfEditor;
}
