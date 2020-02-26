import { createAction, props } from '@ngrx/store';
import { GeneralData, ProductType, ProductTypes } from '@shared/models/general.entities';

export const readSearchResult = createAction(
  '[Search] Read Search Results',
  props<{
    searchTerm: string
  }>()
);

export const readSearchResultSuccess = createAction(
  '[Search] Read Search Results Success',
  props<{
    searchResults: GeneralData[]
  }>()
);

export const readSearchResultFailed = createAction(
  '[Search] Read Search Results Failed',
  props<{
    error: Error;
  }>()
);

export const changeProductTypeFilter = createAction(
  '[Search] Change Product Type Filter',
  props<{
    productTypeFilter: ProductType;
  }>(),
);
