import { HomeState } from '@home/models/home-state.interface';
import { SearchState } from '@search/models/search-state.interface';
import { ProductState } from '@product/models/product-state.interface';

export interface CoreState {
  homeState?: HomeState;
  searchState?: SearchState;
  productState?: ProductState;
}
