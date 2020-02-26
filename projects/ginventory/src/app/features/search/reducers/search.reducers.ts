import { createReducer, Action, on } from '@ngrx/store';
import { SearchState } from '../models/search-state.interface';
import * as SearchActions from '../actions/search.actions';

const searchReducer = createReducer(
  new SearchState(),
  on(SearchActions.readSearchResultSuccess, (state, {searchResults}) => ({...state, searchResults})),
  on(SearchActions.changeProductTypeFilter, (state, { productTypeFilter}) => ({...state, selectedProductTypeFilter: productTypeFilter}))
);

export function reducer(state: SearchState | undefined, action: Action) {
  return searchReducer(state, action);
}
