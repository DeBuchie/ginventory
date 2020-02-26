import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from '@product/models/product.entities';

@Component({
  selector: 'gin-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() productData: ProductData;
  @Input() isLoading: boolean;
  constructor() {}

  ngOnInit(): void {}

}
