import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPlacaPageRoutingModule } from './buscar-placa-routing.module';

import { BuscarPlacaPage } from './buscar-placa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPlacaPageRoutingModule
  ],
  declarations: [BuscarPlacaPage]
})
export class BuscarPlacaPageModule {}
