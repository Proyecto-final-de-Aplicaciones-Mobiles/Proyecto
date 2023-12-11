import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registrar-multas',
    loadChildren: () => import('./registrar-multas/registrar-multas.module').then( m => m.RegistrarMultasPageModule)
  },
  {
    path: 'buscar-licencia',
    loadChildren: () => import('./Buscar-licencia/consultar-multas.module').then( m => m.ConsultarMultasPageModule)
  },
  {
    path: 'tarifa-multas',
    loadChildren: () => import('./tarifa-multas/tarifa-multas.module').then( m => m.TarifaMultasPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'horoscopo',
    loadChildren: () => import('./horoscopo/horoscopo.module').then( m => m.HoroscopoPageModule)
  },
  {
    path: 'buscar-placa',
    loadChildren: () => import('./buscar-placa/buscar-placa.module').then( m => m.BuscarPlacaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then(m=>m.MapaComponentModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
