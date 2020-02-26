import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '@product/services/product.service';
import { Injectable } from '@angular/core';
import * as ProductActions from '@product/actions/product.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductEffects {
  readProductData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.readProductData),
      switchMap((action) =>
        this.productService.getProductData(action.productId)
          .pipe(
            map((productData) => ProductActions.readProductDataSuccess({ productData })),
            catchError((error) => of(ProductActions.readProductDataFailed({error})))
          )
      )
    )
  );

  constructor(private actions$: Actions, private productService: ProductService) {}
}
