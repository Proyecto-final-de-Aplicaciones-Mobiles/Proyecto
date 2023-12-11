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
    { title: 'Registro de multas', url: '/registrar-multas', icon: 'duplicate' },
    { title: 'Buscar', url: '/Buscar', icon: 'archive' },
    { title: 'Clima', url: '/clima', icon: 'sunny' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  constructor() {}
}
