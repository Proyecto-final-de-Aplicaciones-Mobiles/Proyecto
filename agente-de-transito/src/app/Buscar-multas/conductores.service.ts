// conductores.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductoresService {
  constructor(private firestore: AngularFirestore) {}

  obtenerConductorPorLicencia(licencia: string): Observable<any> {
    return this.firestore.collection('conductores', ref => ref.where('licencia', '==', licencia)).valueChanges();
  }
}
