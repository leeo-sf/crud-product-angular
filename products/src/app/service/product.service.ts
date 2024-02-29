import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Product } from '../Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrlCreate = `${this.baseApiUrl}CadastrarProduto`;
  private apiUrlGetProducts = `${this.baseApiUrl}ListarTodosProdutos`;
  private apiUrlDeleteProduct = `${this.baseApiUrl}DeletarProduto`;
  private apiUrlGetProductById = `${this.baseApiUrl}BuscarPorId`;
  private apiUrlUpdateProduct = `${this.baseApiUrl}EdtarProduto`;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  serviceCreateProduct(product: Product): Observable<Product> {
    const productDate = JSON.stringify(product);
    return this.httpClient.post<Product>(this.apiUrlCreate, productDate, this.httpOptions);
  }

  serviceGetAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrlGetProducts);
  }

  serviceDeleteProduct(id: number) {
    const headerDelete = this.httpOptions.headers.set('id_deletar', id.toString());
    return this.httpClient.delete<Product>(this.apiUrlDeleteProduct, { headers:  headerDelete });
  }

  serviceGetProductById(id: number): Observable<Product> {
    const headerGetProductById = this.httpOptions.headers.set('id', id.toString());
    return this.httpClient.get<Product>(this.apiUrlGetProductById, { headers:  headerGetProductById });
  }

  serviceUpdateProduct(id: number, product: Product): Observable<Product> {
    const headerUpdateProduct = this.httpOptions.headers.set('id', id.toString());
    return this.httpClient.put<Product>(this.apiUrlUpdateProduct, product, { headers: headerUpdateProduct })
  }
}
