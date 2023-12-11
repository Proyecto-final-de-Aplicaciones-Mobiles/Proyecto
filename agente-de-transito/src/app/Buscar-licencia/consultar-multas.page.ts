import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-Buscar-licencia',
  templateUrl: './consultar-multa.page.html',
  styleUrls: ['./consultar-multas.page.scss'],
})

export class ConsultarMultaPage implements OnInit {
  cedula: number;
  conductorInfo: any;
  mensaje: any;

  constructor(private firestore: AngularFirestore, private cdr: ChangeDetectorRef) {
    this.cedula = 0;
    this.conductorInfo = null;
    this.mensaje = null;
  }

  buscarConductor() {
    console.log('Número de cédula ingresado:', this.cedula);

    if (typeof this.cedula === 'number' && !isNaN(this.cedula)) {
      const multasCollection = this.firestore.collection("multas");
      const query = multasCollection.ref.where('cedula', '==', this.cedula);

      query.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // Existe al menos una multa con la cédula proporcionada
          const primerResultado = querySnapshot.docs[0].data();
          this.conductorInfo = primerResultado;
          console.log(this.conductorInfo);

          // Forzar la detección de cambios después de actualizar la variable
          this.cdr.detectChanges();
        } else {
          // No se encontraron multas con la cédula especificada
          this.mensaje = 'Conductor no encontrado';
          this.conductorInfo = null;

        }
      }).catch((error) => {
        this.mensaje = 'Error en la consulta:', error;
      });
    } else {
      this.mensaje = 'Ingrese un número de licencia válido';
    }
  }

  ngOnInit() {
    // Puedes realizar cualquier inicialización necesaria
  }
}
