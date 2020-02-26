import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchState } from './models/search-state.interface';
import { StoreModule } from '@ngrx/store';
import * as searchReducers from './reducers/search.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';
import { SharedModule } from '@shared/shared.module';
import { SearchService } from '@search/services/search.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from '@search/components/search-box/search-box.component';
import { SearchResultsComponent } from '@search/components/search-results/search-results.component';

@NgModule({
  declarations: [SearchComponent, SearchBoxComponent, SearchResultsComponent],
  imports: [
    SharedModule,
    SearchRoutingModule,
    StoreModule.forFeature(SearchState.NAME, searchReducers.reducer),
    EffectsModule.forFeature([SearchEffects]),
    ReactiveFormsModule,
  ],
  providers: [SearchService]
})
export class SearchModule { }
