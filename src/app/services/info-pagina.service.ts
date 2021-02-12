import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaes/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPage;
  cargada: boolean = false;
  equipo: any[];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Leer el archivo JSON
    this.http.get('assets/data/data-page.json').subscribe((resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo() {
    this.http
      .get(
        'https://portfolio-angular-fe6d0-default-rtdb.firebaseio.com/Equipo.json'
      )
      .subscribe((resp: any) => {
        this.equipo = resp;
        console.log(resp);
      });
  }
}
