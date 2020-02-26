import { Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SearchActions from './../actions/search.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchEffects {
  readSearchResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.readSearchResult),
      mergeMap((action) =>
        this.searchService.getSearchResults(action.searchTerm)
          .pipe(
            map((result) => SearchActions.readSearchResultSuccess({searchResults: result.data})),
            catchError((error) => of(SearchActions.readSearchResultFailed({error})))
          )
      )
    )
  );


  constructor(private actions$: Actions, private searchService: SearchService) {}
}
