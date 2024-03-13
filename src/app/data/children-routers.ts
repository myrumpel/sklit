import { Routes } from '@angular/router';
import { ViewPriceComponent } from '../pages/children/wholesalers/view-price/view-price.component';
import { ReportsComponent } from '../pages/children/representatives/reports/reports.component';
import { MaterialsAccountingComponent } from '../pages/children/pharmacies/materials-accounting/materials-accounting.component';
import { RemoteAccessComponent } from '../pages/children/pharmacies/remote-access/remote-access.component';
import { AutoOrderComponent } from '../pages/children/pharmacies/auto-order/auto-order.component';
import { ProcessingOfInvoicesComponent } from '../pages/children/pharmacies/processing-of-invoices/processing-of-invoices.component';
import { OperationalMonitoringComponent } from '../pages/children/pharmacies/operational-monitoring/operational-monitoring.component';
import { IndividualReportsComponent } from '../pages/children/pharmacies/individual-reports/individual-reports.component';
import { CompanyCardComponent } from '../pages/children/pharmacies/company-card/company-card.component';
import { ReinstallingTheProgramComponent } from '../pages/children/pharmacies/reinstalling-the-program/reinstalling-the-program.component';
import { RunningProgramWithKeysComponent } from '../pages/children/pharmacies/running-program-with-keys/running-program-with-keys.component';
import { RedistributionApplicationComponent } from '../pages/children/pharmacies/redistribution-application/redistribution-application.component';
import { ImportApplicationComponent } from '../pages/children/pharmacies/import-application/import-application.component';
import { ExportDataComponent } from '../pages/children/pharmacies/export-data/export-data.component';
import { InformationExchangeComponent } from '../pages/children/wholesalers/information-exchange/information-exchange.component';
import { DbfEditorComponent } from '../pages/children/wholesalers/dbf-editor/dbf-editor.component';
import { PriceListFormatComponent } from '../pages/children/wholesalers/price-list-format/price-list-format.component';
import { ApplicationFormatComponent } from '../pages/children/wholesalers/application-format/application-format.component';
import { InvoiceFormatComponent } from '../pages/children/wholesalers/invoice-format/invoice-format.component';
import { DisclaimerFormatComponent } from '../pages/children/wholesalers/disclaimer-format/disclaimer-format.component';
import { PromotionDiscountBonusComponent } from '../pages/children/wholesalers/promotion-discount-bonus/promotion-discount-bonus.component';
import { SupplierShareReportComponent } from '../pages/children/wholesalers/supplier-share-report/supplier-share-report.component';

export const representativesChildrenRoutes: Routes = [
  { path: 'view-price', component: ViewPriceComponent },
  { path: 'reports', component: ReportsComponent },
];
export const wholesalersChildrenRoutes: Routes = [
  { path: 'view-price', component: ViewPriceComponent },
  { path: 'information-exchange', component: InformationExchangeComponent },
  { path: 'dbf-editor', component: DbfEditorComponent },
  { path: 'price-list-format', component: PriceListFormatComponent },
  { path: 'application-format', component: ApplicationFormatComponent },
  { path: 'invoice-format', component: InvoiceFormatComponent },
  { path: 'disclaimer-format', component: DisclaimerFormatComponent },
  {
    path: 'promotion-discount-bonus',
    component: PromotionDiscountBonusComponent,
  },
  {
    path: 'supplier-share-report',
    component: SupplierShareReportComponent,
  },
  { path: 'individual-reports', component: IndividualReportsComponent },
];
export const pharmaciesChildrenRoutes: Routes = [
  { path: 'view-price', component: ViewPriceComponent },
  { path: 'materials-accounting', component: MaterialsAccountingComponent },
  { path: 'remote-access', component: RemoteAccessComponent },
  { path: 'auto-order', component: AutoOrderComponent },
  {
    path: 'processing-of-invoices',
    component: ProcessingOfInvoicesComponent,
  },
  {
    path: 'operational-monitoring',
    component: OperationalMonitoringComponent,
  },
  { path: 'individual-reports', component: IndividualReportsComponent },
  { path: 'company-card', component: CompanyCardComponent },
  {
    path: 'reinstalling-the-program',
    component: ReinstallingTheProgramComponent,
  },
  {
    path: 'running-program-with-keys',
    component: RunningProgramWithKeysComponent,
  },
  {
    path: 'redistribution-application',
    component: RedistributionApplicationComponent,
  },
  { path: 'import-application', component: ImportApplicationComponent },
  { path: 'export-data', component: ExportDataComponent },
];