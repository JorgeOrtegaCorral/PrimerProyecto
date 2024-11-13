import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { PokemonApi } from "../interfaces/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  mostrarDetalles: BehaviorSubject<string> = new BehaviorSubject<string>("");
  detalles$: Observable<string> = this.mostrarDetalles.asObservable();

  constructor() { }

  getNombre(detalles: string) {
    this.mostrarDetalles.next(detalles);
  }
}
