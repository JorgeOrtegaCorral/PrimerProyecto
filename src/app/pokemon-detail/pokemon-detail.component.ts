import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from "../services/pokemon/pokemon-detail.service";
import { PokemonApi } from "../services/interfaces/pokemon";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{
  nombre: string = "";

  constructor(
    private pokemonDetailService: PokemonDetailService
  ){}

  ngOnInit() {
   this.pokemonDetailService.detalles$.subscribe(mostarDetalles => {
     this.nombre = mostarDetalles
   })
  }

}
