import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {Pokemon} from "./../interfaces/pokemon";
import { POKEDEX } from './../interfaces/pokedex';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {
  //Debemos rescatar el parametro llamado id_pokemon
  public pokemon!: Pokemon; 
  // se usa ! para decir que el dato se utilizara despues
  constructor(private ar: ActivatedRoute) { 
    ar.paramMap.subscribe(parametros =>{
      const id_pokemon: number = Number.parseInt(parametros.get("id_pokemon") as string); 
      for(let pokemon of POKEDEX){
        if(pokemon.id === id_pokemon){
          //encontramos el pokemon
          //lo guardamos para usarlo en la pagina
          this.pokemon = pokemon;
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

}

