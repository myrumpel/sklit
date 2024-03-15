import { Component, Input, input, OnInit } from '@angular/core';
import { pharmaciesLinks } from '../../../data/pharmacies-links';
import { sidebarLinks } from '../../../models/sidebarLinks';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() items: sidebarLinks[] = [];
}
