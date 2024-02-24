import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required),
      quantidade: new FormControl('', Validators.required),
      idFabricante: new FormControl('', Validators.required),
      idCategoria: new FormControl('', Validators.required),
    });
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

    console.log("Formulário enviado")
  }
}
