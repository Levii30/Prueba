import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'pokemon';
  lista = [
    {
      nombre: "Andres"
    },
    {
      nombre: "Levy"
    },
    {
      nombre: "Julieth"
    },
    {
      nombre: "ABC"
    },
    {
      nombre: "123"
    }
  ];

}
