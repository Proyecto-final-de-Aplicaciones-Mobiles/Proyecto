import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarifaMultasPageRoutingModule } from './tarifa-multas-routing.module';

import { TarifaMultasPage } from './tarifa-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarifaMultasPageRoutingModule
  ],
  declarations: [TarifaMultasPage]
})
export class TarifaMultasPageModule {}
