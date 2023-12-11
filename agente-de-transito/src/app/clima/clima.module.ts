import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaPageRoutingModule } from './clima-routing.module';

import { ClimaPage } from './clima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaPageRoutingModule
  ],
  declarations: [ClimaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClimaPageModule {}
