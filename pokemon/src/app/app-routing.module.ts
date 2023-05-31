import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
