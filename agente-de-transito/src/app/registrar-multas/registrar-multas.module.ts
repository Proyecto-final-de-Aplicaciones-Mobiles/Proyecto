import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarMultasPageRoutingModule } from './registrar-multas-routing.module';

import { RegistrarMultasPage } from './registrar-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarMultasPageRoutingModule
  ],
  declarations: [RegistrarMultasPage]
})
export class RegistrarMultasPageModule {}
