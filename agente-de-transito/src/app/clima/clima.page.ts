import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import axios from 'axios';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  multas: any[] = [];
  selectedMulta: any = {};
  climaInfo: any;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.obtenerMultas();
  }

  obtenerMultas() {
    this.firestore.collection("multas").valueChanges().subscribe((multas: any) => {
      this.multas = multas;
    });
  }

  async obtenerClima() {
    if (this.selectedMulta && this.selectedMulta.latitud && this.selectedMulta.longitud) {
      const apiKey = '4ed03e53105e49c895491653232610'; // Reemplaza con tu clave de API de WeatherAPI
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.selectedMulta.latitud},${this.selectedMulta.longitud}`;

      try {
        const response = await axios.get(apiUrl);
        this.climaInfo = response.data;

        // Haz lo que necesites con la información del clima, por ejemplo, imprímela en la consola
        console.log('Información del clima:', this.climaInfo);
      } catch (error) {
        console.error('Error al obtener la información del clima', error);
      }
    } else {
      console.error('Selecciona una multa para obtener el clima.');
    }
  }

}
