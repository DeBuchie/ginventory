import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeadlineComponent } from './product-headline.component';

describe('ProductHeadlineComponent', () => {
  let component: ProductHeadlineComponent;
  let fixture: ComponentFixture<ProductHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
