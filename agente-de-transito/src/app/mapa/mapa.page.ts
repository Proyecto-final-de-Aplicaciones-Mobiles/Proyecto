// mapa.component.ts

import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map: any;

  constructor(private firebaseService: FirebaseService) {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 3,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    tiles.addTo(this.map);

    const customIcon = L.icon({
        iconUrl: './assets/icon/location-icon.png',  // Reemplaza con la ruta de tu propio icono
        iconSize: [25, 30],  // Tamaño del icono
        iconAnchor: [16, 30],  // Punto de anclaje del icono
        popupAnchor: [0, -30],  // Punto de anclaje del popup
      });


    // Obtener datos de multas desde Firebase
    this.firebaseService.getMultas().subscribe((multas) => {
      multas.forEach((multa: any) => {
        // Agregar marcador para cada ubicación de multa
        const marker = L.marker([multa.latitud, multa.longitud],{ icon: customIcon});
        marker.bindPopup(`Multa: ${multa.comentario}`);
        marker.addTo(this.map);
      });
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
