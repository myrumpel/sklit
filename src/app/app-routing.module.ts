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
import { ViewPriceComponent } from './pages/children/wholesalers/view-price/view-price.component';
import { ReportsComponent } from './pages/children/representatives/reports/reports.component';
import { RemoteAccessComponent } from './pages/children/pharmacies/remote-access/remote-access.component';
import { AutoOrderComponent } from './pages/children/pharmacies/auto-order/auto-order.component';
import { ProcessingOfInvoicesComponent } from './pages/children/pharmacies/processing-of-invoices/processing-of-invoices.component';
import { OperationalMonitoringComponent } from './pages/children/pharmacies/operational-monitoring/operational-monitoring.component';
import { IndividualReportsComponent } from './pages/children/pharmacies/individual-reports/individual-reports.component';
import { CompanyCardComponent } from './pages/children/pharmacies/company-card/company-card.component';
import { ReinstallingTheProgramComponent } from './pages/children/pharmacies/reinstalling-the-program/reinstalling-the-program.component';
import { RunningProgramWithKeysComponent } from './pages/children/pharmacies/running-program-with-keys/running-program-with-keys.component';
import { RedistributionApplicationComponent } from './pages/children/pharmacies/redistribution-application/redistribution-application.component';
import { ImportApplicationComponent } from './pages/children/pharmacies/import-application/import-application.component';
import { ExportDataComponent } from './pages/children/pharmacies/export-data/export-data.component';
import { InformationExchangeComponent } from './pages/children/wholesalers/information-exchange/information-exchange.component';
import { DbfEditorComponent } from './pages/children/wholesalers/dbf-editor/dbf-editor.component';
import { PriceListFormatComponent } from './pages/children/wholesalers/price-list-format/price-list-format.component';
import { ApplicationFormatComponent } from './pages/children/wholesalers/application-format/application-format.component';
import { InvoiceFormatComponent } from './pages/children/wholesalers/invoice-format/invoice-format.component';
import { DisclaimerFormatComponent } from './pages/children/wholesalers/disclaimer-format/disclaimer-format.component';
import { PromotionDiscountBonusComponent } from './pages/children/wholesalers/promotion-discount-bonus/promotion-discount-bonus.component';
import { SupplierShareReportComponent } from './pages/children/wholesalers/supplier-share-report/supplier-share-report.component';
import { MaterialsAccountingComponent } from './pages/children/pharmacies/materials-accounting/materials-accounting.component';
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
    component: PharmaciesComponent,
    children: pharmaciesChildrenRoutes,
  },

  {
    path: 'wholesalers',
    component: WholesalersComponent,
    children: wholesalersChildrenRoutes,
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
