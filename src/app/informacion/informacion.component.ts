import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonApi } from "../services/interfaces/pokemon";
import { InformacionService } from "../services/modales/informacion.service";
import { EnviarPokemonService } from "../services/pokemon/enviar-pokemon.service";
import { PokemonApiService } from "../services/pokemon/pokemon-api.service";
import { PokemonDetailService } from "../services/pokemon/pokemon-detail.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit{

  mostarModal: boolean = false;
  pokemonsApi: PokemonApi[] = [];

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService,
    private pokemonApiService: PokemonApiService,
    private pokemonDetailService: PokemonDetailService,
    private router: Router
  ){}

  ngOnInit() {
    this.informacionService.modal$.subscribe(modal => {
      this.mostarModal = modal;
    });

    this.pokemonApiService.getAllPokemon().subscribe({

      //Obligatorios: next, error
      //Opcional: complete

      next: data => { //Si la comunicacion y la respuesta esta ok
        //console.log(data.results)
        this.pokemonsApi = data.results
        console.log(this.pokemonsApi)
      },

      //Si hay error a la hora de comunicarnos con con la api o problemas
      error: error => {
        console.log(error)
      },

      complete: () => {
        console.log("Comunicacion finalizada")
      }

    })
  }

  toggleModal(pk: Pokemon) {
    this.enviarPokemonService.updatePokemon(pk);
    this.informacionService.toggleModal(true);
  }

  // Ver datos en HTML usando directiva *ngFor
  pokemons: Pokemon[] = [
    {
      id: 1,
      nombre: "Mimikyu_1",
      descripcion: "Vive en lugares oscuros donde no llega el sol. Cuando se deja ver por la gente, oculta todo su cuerpo bajo un saco con aspecto de Pikachu.",
      image_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png"
    },
    {
      id: 2,
      nombre: "Mimikyu_2",
      descripcion: "Vive en lugares oscuros donde no llega el sol. Cuando se deja ver por la gente, oculta todo su cuerpo bajo un saco con aspecto de Pikachu.",
      image_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png"
    },
    {
      id: 3,
      nombre: "Mimikyu_3",
      descripcion: "Vive en lugares oscuros donde no llega el sol. Cuando se deja ver por la gente, oculta todo su cuerpo bajo un saco con aspecto de Pikachu.",
      image_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png"
    },
    {
      id: 4,
      nombre: "Mimikyu_4",
      descripcion: "Vive en lugares oscuros donde no llega el sol. Cuando se deja ver por la gente, oculta todo su cuerpo bajo un saco con aspecto de Pikachu.",
      image_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png"
    },
    {
      id: 5,
      nombre: "Mimikyu_5",
      descripcion: "Vive en lugares oscuros donde no llega el sol. Cuando se deja ver por la gente, oculta todo su cuerpo bajo un saco con aspecto de Pikachu.",
      image_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png"
    },
  ]

  detallesPokemon(nombre: string) {
    //deberemos enviar el nombre a trves de un BehaviorSubject al componente pokemon-detail
    this.pokemonDetailService.getNombre(nombre);
    this.router.navigate(['detalles']);
  }

}




