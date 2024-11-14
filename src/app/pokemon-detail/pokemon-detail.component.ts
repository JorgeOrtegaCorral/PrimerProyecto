import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from "../services/pokemon/pokemon-detail.service";
import {DetailService} from '../services/detalles-pokemon/detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{
  nombre: string = "";
  sprite: string = "";

  constructor(
    private pokemonDetailService: PokemonDetailService,
    private detailService: DetailService
  ){}

  ngOnInit() {
   this.pokemonDetailService.detalles$.subscribe(mostarDetalles => {
     this.nombre = mostarDetalles

     this.detailService.getPokemon(this.nombre).subscribe({

       //Obligatorios: next, error
       //Opcional: complete

       next: data => { //Si la comunicacion y la respuesta esta ok
         //console.log(data)
         this.sprite = data.sprites.front_default
         console.log(this.sprite)
       },

       //Si hay error a la hora de comunicarnos con con la api o problemas
       error: error => {
         console.log(error)
       }
     })
   })
  }

}
