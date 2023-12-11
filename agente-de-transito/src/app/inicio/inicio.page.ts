import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  multas: any[] = []; 
  selectedMulta: any; 
  showDetail: boolean = false; 
  showDelete: boolean = false; 

  constructor(
    private firestore: AngularFirestore,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.firestore
      .collection('multas')
      .valueChanges()
      .subscribe((data: any) => {
        this.multas = data;
    });
  }

  mostrarDetalle(multa: any) {
    this.selectedMulta = multa;
    this.showDetail = true;
  }

  volverAListado() {
    this.showDetail = false;
  }

  
}


