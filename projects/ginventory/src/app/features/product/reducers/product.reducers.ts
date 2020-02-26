import { Action, createReducer, on } from '@ngrx/store';
import { ProductState } from '@product/models/product-state.interface';
import * as ProductActions from '@product/actions/product.actions';

const productReducer = createReducer(
  new ProductState(),
  on(ProductActions.readProductData, (state, _) => ({...state, isLoading: true})),
  on(ProductActions.readProductDataSuccess, (state, { productData }) => ({ productData, isLoading: false })),
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
