import { Component, OnInit } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Product';
import { ProductService } from '../../service/product.service';
import { NgIf } from '@angular/common';
import { MessagesService } from '../../service/messages.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    ProductFormComponent,
    NgIf
  ],
  providers: [ProductService],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
  btnTitle: string = "Atulizar produto";
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.serviceGetProductById(id).subscribe((item) => {
      this.product = item;
    })
  }

  async updateProduct(product: Product) {
    const id = this.product.id!;

    await this.productService.serviceUpdateProduct(id, product).subscribe(() => {},
    (error) => {
      if (error.status === 400) {
        alert('Não foi possível atualizar! ' + error.error)
      }

      //Valiidando o status de sucesso (200) pq mesmo dando o status 200 a API está retornando erro
      if (error.status == 200) {
        this.messageService.add("Produto alterado com sucesso!");
        this.router.navigate(['/']);
      }
    }
    );
  }
}
