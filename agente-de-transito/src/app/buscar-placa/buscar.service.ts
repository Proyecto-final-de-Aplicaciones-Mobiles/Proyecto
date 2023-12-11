import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarService {
  constructor(private firestore: AngularFirestore) {}

  buscarPorPlaca(placa: string): Observable<any[]> {
    const multasCollection = this.firestore.collection("multas");
    const query = multasCollection.ref.where('placa', '==', placa);

    return new Observable(observer => {
      query.get().then(querySnapshot => {
        const resultados = querySnapshot.docs.map(doc => doc.data());
        observer.next(resultados);
        observer.complete();
      }).catch(error => {
        observer.error(error);
      });
    });
  }
}
