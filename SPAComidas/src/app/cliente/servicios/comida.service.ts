import { Injectable } from '@angular/core';
import { Comida } from './../../models/comida';

@Injectable({
  providedIn: 'root'
})

export class ComidaService {
  private listaComidas:Comida[] = []
  constructor() {

  }

  obtenerListaComidas() {
    return this.listaComidas;
  }

  buscarComidaPorNombe(nombre:string):Comida {
    var comida = new Comida(-1, '', '', -1, -1);
    this.listaComidas.map(elem => {
      if(elem.nombre == nombre) {
        comida = elem;
      }
    });

    return comida;
  }

  agregarComida(comida:Comida) {
    this.listaComidas.push(comida);
  }

  editarComida(comida:Comida) {
    var lista:Comida[] = [];
    this.listaComidas.map(elem => {
      if(elem.nombre == comida.nombre) {
        lista.push(comida);
      }
      else {
        lista.push(elem);
      }
    });
    this.listaComidas = lista;
  }

  eliminarComida(nombre:string) {
    var lista:Comida[] = [];
    this.listaComidas.map(elem => {
      if(elem.nombre != nombre) {
        lista.push(elem);
      }
    });
    this.listaComidas = lista;
  }
}