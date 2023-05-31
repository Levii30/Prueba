import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private http: HttpClient) { }
  listaDePokemons = null;
  pokemonDetalle = null;
  id = new FormControl();

  ngOnInit(): void {
    this.getTodosLosPokemones();
    this.id.valueChanges.subscribe(change => {
      if (change != null) {
        this.obtenerPorID(change)
      }
    })

  }

  getTodosLosPokemones() {
    this.http.get("https://pokeapi.co/api/v2/pokemon/").subscribe(pokemos => {
      this.listaDePokemons = pokemos['results'];
      console.log(pokemos['results']);
    });
  }
  obtenerPorID(id) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(pokemon => {
      this.pokemonDetalle = pokemon;
    });
  }
}
