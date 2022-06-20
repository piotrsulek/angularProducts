import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  productsChanged = new Subject<Product[]>();

  private products: Product[] = [
    new Product(
      'HUAWEI MateBook D 15 15.6',
      'Laptop HUAWEI MateBook D 15 15.6" IPS i5-1135G7 8GB RAM 512GB SSD Windows 11 Home',
      'https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/35/3557365/Laptop-HUAWEI-MateBook-D-15-front-05.jpg',
      ),
    new Product('Laptop HP 255 G8 15.6',
      'Laptop HP 255 G8 15.6" IPS R3-5300U 8GB RAM 256GB SSD Windows 10 Home',
      'https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/33/3306189/Laptop-HP-250-G8-front-tyl-01.jpg',
      )
  ];

  constructor() {}

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }


  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    this.productsChanged.next(this.products.slice());
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }
}
