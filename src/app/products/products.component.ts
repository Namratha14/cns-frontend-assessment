import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Products } from './types/product-types';
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
  errorMessage: string | null = null;
  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: (response: ProductResponse) => {
        this.products = response.data.products;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = `An error occurred while fetching products. ${error.message}`;
      }
    });
  }
}
