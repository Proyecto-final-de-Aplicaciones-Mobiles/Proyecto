import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPlacaPage } from './buscar-placa.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPlacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPlacaPageRoutingModule {}
