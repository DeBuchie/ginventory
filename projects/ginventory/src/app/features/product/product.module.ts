import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ProductState } from '@product/models/product-state.interface';
import * as productReducers from '@product/reducers/product.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '@product/effects/product.effects';
import { ProductService } from '@product/services/product.service';
import { ProductResolver } from '@product/product.resolver';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductRatingComponent } from './components/product-rating/product-rating.component';
import { ProductHeadlineComponent } from './components/product-headline/product-headline.component';

@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent, ProductRatingComponent, ProductHeadlineComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    StoreModule.forFeature(ProductState.NAME, productReducers.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers:[ProductService, ProductResolver]
})
export class ProductModule { }
