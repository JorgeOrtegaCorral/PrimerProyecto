import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from "../services/pokemon/pokemon-detail.service";
import {DetailService} from '../services/detalles-pokemon/detail.service';
import {Detalles} from '../services/interfaces/detalles';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{
  nombre: string = "";
  pokemon: Detalles | null= null;

  constructor(
    private pokemonDetailService: PokemonDetailService,
    private detailService: DetailService
  ){}

  ngOnInit() {
   this.pokemonDetailService.detalles$.subscribe(mostarDetalles => {
     this.nombre = mostarDetalles

     this.detailService.getPokemon(this.nombre).subscribe({

       next: data => { //Si la comunicacion y la respuesta esta ok
         //console.log(data)
         this.pokemon = {
           imagen: data.sprites.front_default,
           abilities: []
         }

         for (let i = 0; i < data.abilities.length; i++){
           this.pokemon.abilities.push(data.abilities[i].ability);
         }

         console.log(this.pokemon)
       },

       //Si hay error a la hora de comunicarnos con con la api o problemas
       error: error => {
         console.log(error)
       }
     })
   })
  }

}
