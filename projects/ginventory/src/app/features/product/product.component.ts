import { Component, OnInit } from '@angular/core';
import { CoreState } from '@core/models/core-state.interface';
import { select, Store } from '@ngrx/store';
import { ProductState } from '@product/models/product-state.interface';
import { ProductData } from '@product/models/product.entities';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'gin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productData: ProductData;
  public isLoading = true;
  constructor(private store: Store<CoreState>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(ProductState.NAME),
      filter((state) => typeof state !== 'undefined')
    ).subscribe((productState) => {
      if (productState !== undefined) {
        this.isLoading = productState.isLoading;
        this.productData = productState.productData;
      }
    });
  }

}
