import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaes/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPage;
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    //Leer el archivo JSON
    this.http.get('assets/data/data-page.json').subscribe((resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
