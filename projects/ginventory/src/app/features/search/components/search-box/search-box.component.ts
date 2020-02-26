import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ProductTypes } from '@shared/models/general.entities';

@Component({
  selector: 'gin-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Output() searchTerm = new EventEmitter<string>();
  @Output() changeProductTypeFilter = new EventEmitter<string>();
  public searchBoxFormControl = new FormControl('');


  ngOnInit(): void {
    this.searchBoxFormControl.valueChanges
      .pipe(
        debounceTime(500),
      )
      .subscribe((searchTerm) => this.searchTerm.emit(searchTerm));
  }

  ngOnDestroy(): void {}

  public get availableProductTypes() {
    return Object.keys(ProductTypes);
  }

  onChangeProductTypeFilter(productType: string) {
    this.changeProductTypeFilter.emit(productType);
  }
}
