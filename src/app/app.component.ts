import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angular app';
  products: IProduct[] = []
  loading = false

  constructor(private productsServise: ProductsService) {
  }

  ngOnInit() {
    this.loading = true
    this.productsServise.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
}
