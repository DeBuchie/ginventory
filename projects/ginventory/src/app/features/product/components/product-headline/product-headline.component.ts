import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gin-product-headline',
  templateUrl: './product-headline.component.html',
  styleUrls: ['./product-headline.component.scss']
})
export class ProductHeadlineComponent implements OnInit {

  @Input() name: string;
  @Input() firstName: string;
  @Input() secondName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
