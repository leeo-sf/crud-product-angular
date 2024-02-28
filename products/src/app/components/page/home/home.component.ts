import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Product';
import { ProductService } from '../../../service/product.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgStyle,
    RouterLink
  ],
  providers: [ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  listOfProducts!: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.serviceGetAllProducts().subscribe((products: Product[]) => {
      this.listOfProducts = products;
    });
  }

  deleteProduct(product: Product) {
    if (confirm("Deseja deletar o produto ? Esta ação não poderá ser desfeita.")) {
      this.confirmDeleteProduct(product.id);
    }
  }

  private async confirmDeleteProduct(id: number) {
    await this.productService.serviceDeleteProduct(id).subscribe();
    window.location.reload();
  }
}
