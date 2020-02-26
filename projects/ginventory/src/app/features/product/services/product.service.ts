import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData } from '@product/models/product.entities';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProductData(productId: string): Observable<ProductData> {
    return this.httpClient.get<ProductData>(`${environment.BASE_URL}/${productId}`,
      {
        params: {api_key: environment.API_KEY, lang: 'de'}
      });
  }
}
