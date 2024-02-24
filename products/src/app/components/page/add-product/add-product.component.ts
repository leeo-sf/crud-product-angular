import { Component } from '@angular/core';
import { ProductFormComponent } from '../../product-form/product-form.component';
import { Product } from '../../../Product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    ProductFormComponent,
  ],
  providers: [
    ProductService
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  btnText: string = "Cadastrar produto";

  constructor(private productService: ProductService) {}

  async createHandler(product: Product) {
    product.id = 0;
    await this.productService.serviceCreateProduct(product).subscribe();
  }
}
