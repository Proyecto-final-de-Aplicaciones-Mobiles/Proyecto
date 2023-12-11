import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BuscarService } from './buscar.service';

@Component({
  selector: 'app-buscar-placa',
  templateUrl: './buscar-placa.page.html',
  styleUrls: ['./buscar-placa.page.scss'],
})
export class BuscarPlacaPage implements OnInit {
  placa: string;
  conductorInfo: any;
  mensaje: any;

  constructor(private buscarService: BuscarService) {
    this.placa = '';
    this.conductorInfo = null;
    this.mensaje = null;
  }

  buscarPlaca() {
    if (this.placa.trim() !== '') {
      this.buscarService.buscarPorPlaca(this.placa).subscribe(
        (resultados) => {
          if (resultados && resultados.length > 0) {
            this.conductorInfo = resultados[0];
            console.log('Resultado encontrado por placa:', this.conductorInfo);
          } else {
            this.mensaje = 'No se encontraron resultados por placa';
            this.conductorInfo = null;
          }
        },
        (error) => {
          console.error('Error en la consulta por placa:', error);
        }
      );
    } else {
      this.mensaje = 'Ingrese una placa válida';
    }
  }


  ngOnInit() {
  }

}
