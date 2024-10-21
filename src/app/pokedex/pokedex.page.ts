import { Component, OnInit } from '@angular/core';
import {POKEDEX} from "./../interfaces/pokedex";
import {Pokemon} from "./../interfaces/pokemon";
import {Router} from "@angular/router";
 
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  public datos: Pokemon[]=POKEDEX;
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public verDetalle(id: number): void {
    this.router.navigate(['/informacion', id]);
  }
}
