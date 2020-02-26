import { Component, Input, OnInit } from '@angular/core';
import { GeneralData } from '../../../../shared/models/general.entities';

@Component({
  selector: 'gin-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: GeneralData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
