import { GeneralData, ProductType } from '@shared/models/general.entities';

export class SearchState {
  static readonly NAME = 'searchState';
  searchResults: GeneralData[] = [];
  selectedProductTypeFilter: ProductType = 'gin';
}
