import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`http://74.225.249.141:9200/kibana_sample_data_ecommerce/_search?pretty=true&q=*:*`);
  }
}
