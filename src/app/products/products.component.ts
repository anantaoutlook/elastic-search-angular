import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products : Array<any> =  [];
  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    console.log("LOADED");
    this.productService.getProducts().subscribe((response: any)=> {
      console.log('RESPONSE', response.hits.hits);
      this.products = response.hits.hits;
    });
  }
}
