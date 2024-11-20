import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Products } from './types/product-types'

interface ProductResponse {
  data: {
      products: Products[];
  };
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  constructor(private service: ProductsService) { }
  isLoading = true;
  ngOnInit(): void {
    (this.service.getProducts()).subscribe((products: ProductResponse) => {
      console.log(products.data.products)
      this.products = products.data.products;
      console.log(this.products)
      this.isLoading = false;
      });
  }
}
