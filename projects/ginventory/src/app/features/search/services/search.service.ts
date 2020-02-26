import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from '../models/search.entities';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public getSearchResults(searchTerm: string): Observable<Search> {
    return this.httpClient
      .get<Search>(`${environment.BASE_URL}/search`, {
      params: {q: searchTerm, api_key: environment.API_KEY, lang: 'de'}
    })
  }
}
