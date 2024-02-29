import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../Product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  @Input() btnText!: string;
  @Input() productData!: Product;
  @Output() onSubmit = new EventEmitter<Product>();

  ngOnInit(): void {
    //Se tiver dados monte o formulário com os dados
    if (this.productData) {
      this.productForm = new FormGroup({
        id: new FormControl(this.productData?.id),
        nome: new FormControl(this.productData.nome),
        preco: new FormControl(this.productData.preco),
        quantidade: new FormControl(this.productData.quantidade),
        idFabricante: new FormControl(this.productData.idFabricante),
        idCategoria: new FormControl(this.productData.idCategoria)
      })
    } else {
      this.productForm = new FormGroup({
        id: new FormControl(''),
        nome: new FormControl('', Validators.required),
        preco: new FormControl('', Validators.required),
        quantidade: new FormControl('', Validators.required),
        idFabricante: new FormControl('', Validators.required),
        idCategoria: new FormControl('', Validators.required),
      });
    }
  }

  get nome() {
    return this.productForm.get('nome')!
  }

  get preco() {
    return this.productForm.get('preco')!
  }

  get quantidade() {
    return this.productForm.get('quantidade')!
  }

  get idFabricante() {
    return this.productForm.get('idFabricante')!
  }

  get idCategoria() {
    return this.productForm.get('idCategoria')!
  }

  submit() {
    if(this.productForm.invalid) {
      return
    }
    //Enviando os dados do formulário para o componente pai (pode ser método de create ou update)
    this.onSubmit.emit(this.productForm.value);
  }
}
