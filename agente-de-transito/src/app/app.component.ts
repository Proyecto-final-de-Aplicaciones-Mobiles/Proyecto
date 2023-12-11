import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Tarifa de multas', url: '/tarifa-multas', icon: 'cash' },
    { title: 'Buscar Placa', url: '/buscar-placa', icon: 'search' },
    { title: 'Buscar Licencia', url: '/buscar-licencia', icon: 'archive' },
    { title: 'Registro de multas', url: '/registrar-multas', icon: 'duplicate' },
    { title: 'Clima', url: '/clima', icon: 'sunny' },
    { title: 'Horoscopo', url: '/horoscopo', icon: 'star' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Noticias', url: '/noticias', icon: 'radio' },

  ];

  constructor() {}
}
