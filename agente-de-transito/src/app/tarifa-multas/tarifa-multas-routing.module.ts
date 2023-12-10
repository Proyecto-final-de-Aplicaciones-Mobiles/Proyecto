import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarifaMultasPage } from './tarifa-multas.page';

const routes: Routes = [
  {
    path: '',
    component: TarifaMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarifaMultasPageRoutingModule {}
