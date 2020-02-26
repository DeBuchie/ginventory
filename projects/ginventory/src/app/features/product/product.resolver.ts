import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreState } from '@core/models/core-state.interface';
import * as ProductActions from '@product/actions/product.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolver implements Resolve<void>{
  constructor(private store: Store<CoreState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    const productId = route.paramMap.get('productId');
    if (productId) {
      this.store.dispatch(ProductActions.readProductData({productId}));
    }
  }
}
