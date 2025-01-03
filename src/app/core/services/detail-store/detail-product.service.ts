import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../../../../core/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class DetailStoreService {
  private readonly apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los productos
   * @returns 
   */
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.apiUrl);
  }

  /**
   * Obtener un producto específico por ID
   * @param id El ID del producto a buscar
   * @returns Observable con un producto
   */
  getProductById(id: number): Observable<product> {
    return this.http.get<product>(`${this.apiUrl}/${id}`);
  }
}
