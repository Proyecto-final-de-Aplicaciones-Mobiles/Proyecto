import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarifa-multas',
  templateUrl: './tarifa-multas.page.html',
  styleUrls: ['./tarifa-multas.page.scss'],
})
export class TarifaMultasPage implements OnInit {

  multas: Observable<any[]> = this.firestore.collection('tarifa').valueChanges();

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {

  }

}
