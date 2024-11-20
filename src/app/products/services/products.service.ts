import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { defer, Observable, of } from 'rxjs';
import { Products } from '../types/product-types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Public API endpoint to retrieve require data (provided headers need to be included in request)
  private url: string = 'http://localhost:4200/api/public/cds-au/v1/banking/products';
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json',  'x-v': '3'});

  constructor(private http: HttpClient) { }

  // code to make http request should be contained in here
  public  getProducts(): Observable<any> {
    const response = this.http.get<Products[]>(this.url, { headers: this.headers });
    return response;
  }
}
