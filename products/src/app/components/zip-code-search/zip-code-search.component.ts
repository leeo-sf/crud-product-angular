import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchZipCodeService } from '../../service/search-zip-code.service';
import { ResponseViaCep } from '../../../ResponseViaCep';
import { NgFor, NgIf } from '@angular/common';
import { error } from 'node:console';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zip-code-search',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    RouterLink
  ],
  providers: [
    SearchZipCodeService
  ],
  templateUrl: './zip-code-search.component.html',
  styleUrl: './zip-code-search.component.css'
})
export class ZipCodeSearchComponent implements OnInit {
  addressDate!: ResponseViaCep;
  formZipCode!: FormGroup;
  zipCode!: number;

  constructor(private searchZipCodeService: SearchZipCodeService) {}

  ngOnInit(): void {
    this.formZipCode = new FormGroup({
      zipCode: new FormControl('')
    });
  }

  newSearch() {
    location.reload();
  }

  searchZipCode() {
    if (this.formZipCode.invalid || /[a-zA-Z]/.test(this.formZipCode.value.zipCode)) {
      return;
    }

    this.zipCode = this.formZipCode.value.zipCode;
    this.searchZipCodeService.getAddressByZipCode(this.zipCode).subscribe((data) => {
      if (!data.logradouro) {
        alert("Nenhum cep encontrado. Tente novamente");
        return
      }

      this.addressDate = data;
    });
  }
}
