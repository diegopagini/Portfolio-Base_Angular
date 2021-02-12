import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaes/productos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargado = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
      .get(
        'https://portfolio-angular-fe6d0-default-rtdb.firebaseio.com/productos_idx.json'
      )
      .subscribe((resp: Product[]) => {
        console.log(resp);
        this.cargado = false;
      });
  }
}
