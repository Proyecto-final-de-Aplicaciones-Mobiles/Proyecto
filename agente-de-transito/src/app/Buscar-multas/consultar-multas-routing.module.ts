import { ConsultarMultaPage } from "./consultar-multas.page";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
{
    path: '',
    component: ConsultarMultaPage
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConsultarMultasPageRoutingModule {}
  