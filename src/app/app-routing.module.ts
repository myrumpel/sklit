import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PharmaciesComponent } from './pages/pharmacies/pharmacies.component';
import { RepresentativesComponent } from './pages/representatives/representatives.component';
import { WholesalersComponent } from './pages/wholesalers/wholesalers.component';
import { HelpComponent } from './pages/help/help.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import {
  pharmaciesChildrenRoutes,
  representativesChildrenRoutes,
  wholesalersChildrenRoutes,
} from './data/children-routers';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'pharmacies',
    pathMatch: 'full',
    redirectTo: 'pharmacies/section-description',
  },
  {
    path: 'pharmacies',
    component: PharmaciesComponent,
    children: pharmaciesChildrenRoutes,
  },
  {
    path: 'wholesalers',
    pathMatch: 'full',
    redirectTo: 'wholesalers/section-description',
  },
  {
    path: 'wholesalers',
    component: WholesalersComponent,
    children: wholesalersChildrenRoutes,
  },
  {
    path: 'representatives',
    pathMatch: 'full',
    redirectTo: 'representatives/view-price',
  },
  {
    path: 'representatives',
    component: RepresentativesComponent,
    children: representativesChildrenRoutes,
  },
  { path: 'help', component: HelpComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contacts', component: ContactsComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
