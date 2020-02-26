import { createAction, props } from '@ngrx/store';
import { ProductData } from '@product/models/product.entities';

export const readProductData = createAction(
  '[Product] Read Product Data',
  props<{
    productId: string;
  }>(),
);

export const readProductDataSuccess = createAction(
  '[Product] Read Product Data Success',
  props<{
    productData: ProductData;
  }>(),
);

export const readProductDataFailed = createAction(
  '[Product] Read Product Data Failed',
  props<{
    error: Error;
  }>(),
);
