import { partnersData } from '../../pages/partners/contentDataPartners';
import { homeData } from '../../pages/home/contentDataHome';
import { contactsData } from '../../pages/contacts/contentDataContacts';
import { viewPriceData } from '../../pages/children/wholesalers/view-price/view-price';
import { helpData } from '../../pages/help/contentDataHelp';
import { reportData } from '../../pages/children/representatives/reports/contentDataReport';
import { sectionDescriptionData } from '../../pages/children/wholesalers/section-description-wholesalers/contentDataSectionDescription';
import { informationExchangeData } from '../../pages/children/wholesalers/information-exchange/contentDataInformationExchange';
import { dbfEditorData } from '../../pages/children/wholesalers/dbf-editor/contentDataDbfEditor';
import { priceListFormatData } from '../../pages/children/wholesalers/price-list-format/contentDataPriceListFormat';
import { applicationFormatData } from '../../pages/children/wholesalers/application-format/contentDataApplicationFormat';
import { invoiceFormatData } from '../../pages/children/wholesalers/invoice-format/contentDataInvoiceFormat';
import { disclaimerFormatData } from '../../pages/children/wholesalers/disclaimer-format/contentDataDisclaimerFormat';
import { promotionDiscountBonusData } from '../../pages/children/wholesalers/promotion-discount-bonus/contentDataPromotionDiscountBonus';
import { individualReportsData } from '../../pages/children/pharmacies/individual-reports/contentDataIndividualReports';

export const contentDataRu = {
  homePage: homeData,
  partnersPage: partnersData,
  contacts: contactsData,
  help: helpData,
  pharmacies: {
    individualReports: individualReportsData,
  },
  wholesalers: {
    description: sectionDescriptionData,
    informationExchange: informationExchangeData,
    dbfEditor: dbfEditorData,
    priceListFormat: priceListFormatData,
    applicationFormat: applicationFormatData,
    invoiceFormat: invoiceFormatData,
    disclaimerFormat: disclaimerFormatData,
    promotionDiscountBonus: promotionDiscountBonusData,
  },
  representatives: {
    report: reportData,
  },
  shared: {
    viewPrice: viewPriceData,
  },
};
