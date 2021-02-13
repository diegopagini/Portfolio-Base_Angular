import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productData } from 'src/app/interfaes/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  producto: productData;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
      this.productoService
        .getProducto(parametros['id'])
        .subscribe((producto: productData) => {
          this.id = parametros['id'];
          this.producto = producto;
        });
    });
  }
}
