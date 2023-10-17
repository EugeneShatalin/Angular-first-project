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

  constructor(private productsServise: ProductsService) {
  }

  ngOnInit() {
    this.productsServise.getAll().subscribe(products => {
      this.products = products
    })
  }
}
