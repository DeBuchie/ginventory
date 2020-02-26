import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gin-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  @Input() productRating: number;

  constructor() { }

  ngOnInit(): void {
  }

}
