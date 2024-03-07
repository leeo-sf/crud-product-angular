import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseViaCep } from '../../ResponseViaCep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchZipCodeService {
  apiUrlGetAddressByZipCode: string = " https://viacep.com.br/";

  constructor(private httpClient: HttpClient) { }

  getAddressByZipCode(zipCode: number): Observable<ResponseViaCep> {
    return this.httpClient.get<ResponseViaCep>(`${this.apiUrlGetAddressByZipCode}ws/${zipCode}/json/`);
  }
}
