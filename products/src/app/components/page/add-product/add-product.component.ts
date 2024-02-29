import { Component } from '@angular/core';
import { ProductFormComponent } from '../../product-form/product-form.component';
import { Product } from '../../../Product';
import { ProductService } from '../../../service/product.service';
import { MessagesService } from '../../../service/messages.service';
import { Router } from '@angular/router';
import { MessagesComponent } from '../../messages/messages.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    ProductFormComponent
  ],
  providers: [
    ProductService
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  btnText: string = "Cadastrar produto";

  constructor(
    private productService: ProductService, 
    private messageService: MessagesService,
    private router: Router
    ) {}

  async createProduct(product: Product) {
    product.id = 0;
    await this.productService.serviceCreateProduct(product).subscribe(() => {}, 
    (error => {
      if (error.status === 400) {
        alert('Não foi possível cadastrar o produto! ' + error.error);
      }

      //Valiidando o status de sucesso (200) pq mesmo dando o status 200 a API está retornando erro
      if (error.status == 200) {
        this.messageService.add("Produto cadastrado com sucesso!");
        this.router.navigate(['/']);
      }
    })
    );
  }
}
