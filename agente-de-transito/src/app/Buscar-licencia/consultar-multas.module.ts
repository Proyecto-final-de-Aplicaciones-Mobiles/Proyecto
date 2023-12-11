import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ConsultarMultasPageRoutingModule } from './consultar-multas-routing.module';

import { ConsultarMultaPage } from './consultar-multas.page';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ConsultarMultasPageRoutingModule
    ],
    declarations: [ConsultarMultaPage]
})
export class ConsultarMultasPageModule {}