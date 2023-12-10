import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarMultasPage } from './registrar-multas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarMultasPageRoutingModule {}
