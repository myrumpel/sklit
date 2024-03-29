import { Component } from '@angular/core';
import { ParagraphComponent } from '../../../../components/layout/paragraph/paragraph.component';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'section-description-wholesalers-accounting',
  templateUrl: './section-description-wholesalers.component.html',
  styleUrl: './section-description-wholesalers.component.scss',
})
export class SectionDescriptionWholesalersComponent {
  data = contentDataRu.wholesalers.description;
}
