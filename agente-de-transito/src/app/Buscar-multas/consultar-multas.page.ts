import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-Buscar-multas',
  templateUrl: './consultar-multa.page.html',
  styleUrls: ['./consultar-multas.page.scss'],
})

export class ConsultarMultaPage implements OnInit  {
  cedula: number;
  conductorInfo: any;

  constructor(private firestore: AngularFirestore) {
    this.cedula = 0;
    this.conductorInfo = null;
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
        } else {
          // No se encontraron multas con la cédula especificada
          console.log('Conductor no encontrado');
          this.conductorInfo = null;
        }
      }).catch((error) => {
        console.error('Error en la consulta:', error);
      });
    } else {
      console.log('Ingrese un número de cédula válido');
    }
  }

  ngOnInit() {
    // Puedes realizar cualquier inicialización necesaria
  }
}
