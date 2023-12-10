import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inbox', icon: 'home' },
    { title: 'Tarifa de multas', url: '/folder/outbox', icon: 'cash' },
    { title: 'Registro de multas', url: '/registrar-multas', icon: 'heart' },
    { title: 'Buscar', url: '/Buscar', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  constructor() {}
}
