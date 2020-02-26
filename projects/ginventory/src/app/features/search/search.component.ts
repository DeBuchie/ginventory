import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '@core/models/core-state.interface';
import * as SearchActions from './actions/search.actions';
import { SearchState } from './models/search-state.interface';
import { map } from 'rxjs/operators';
import { GeneralData, ProductType, ProductTypes } from '@shared/models/general.entities';

@Component({
  selector: 'gin-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  public searchResults$ = this.store.select(SearchState.NAME).pipe(
    map((state) => {
      if (state) {
        return state.searchResults.filter((searchResult) => searchResult.type === state.selectedProductTypeFilter);
      }
      return [];
    }),
  );

  constructor(private store: Store<CoreState>) { }

  onSearchTermChange(searchTerm: string) {
    if (searchTerm !== '') {
      this.store.dispatch(SearchActions.readSearchResult({ searchTerm }));
    } else {
      this.store.dispatch(SearchActions.readSearchResultSuccess({searchResults: [] as GeneralData[]}))
    }
  }

  onProductTypeFilterChange(selectedProductTypeFilter: string) {
    this.store.dispatch(SearchActions.changeProductTypeFilter({ productTypeFilter: selectedProductTypeFilter as ProductType }));
  }
}
