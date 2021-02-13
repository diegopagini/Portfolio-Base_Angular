import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaes/productos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargado = true;
  productos: Product[] = [];
  productoFiltrado: Product[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(
          'https://portfolio-angular-fe6d0-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: Product[]) => {
          this.productos = resp;
          setTimeout(() => {
            this.cargado = false;
            resolve();
          }, 1500);
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://portfolio-angular-fe6d0-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    termino = termino.toLocaleLowerCase();

    this.productos.forEach((producto) => {
      const tituloLower = producto.titulo.toLocaleLowerCase();

      if (
        producto.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productoFiltrado.push(producto);
      }
    });
  }
}
