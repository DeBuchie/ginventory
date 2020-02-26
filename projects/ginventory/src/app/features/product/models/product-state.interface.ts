import { ProductData } from '@product/models/product.entities';

export class ProductState {
  static readonly NAME = 'productState';
  productData: ProductData;
  isLoading = false;
}
