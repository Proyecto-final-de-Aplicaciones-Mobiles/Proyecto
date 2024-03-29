import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { HoroscopoPageRoutingModule } from './horoscopo-routing.module';

import { HoroscopoPage } from './horoscopo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HoroscopoPageRoutingModule
  ],
  declarations: [HoroscopoPage]
})
export class HoroscopoPageModule {}
